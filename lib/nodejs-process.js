const vm = require('vm');
const { Writable } = require('stream');
const EventEmitter = require('events');
const createLog = require('./log');

function createWriteStream(callback) {
  return new Writable({
    write(data, encoding, next) {
      callback(data);
      next();
    }
  });
}

class NodeJSProcess extends EventEmitter {
  constructor(nodeJsCode) {
    super();
    this.code = nodeJsCode;
    this.logs = null;
    this.exitCode = null;
    this.duration = {
      started: null,
      ended: null,
      totalSeconds: null
    };
  }
  _init(timeoutMs, onExitResolve) {
    this.logs = [];
    this.exitCode = null;
    this.duration = {
      started: new Date(),
      ended: null,
      totalSeconds: null
    };
    const stdOut = createWriteStream(data => this._onStdOut(createLog({ stdOut: data.toString() })));
    const stdErr = createWriteStream(data => this._onStdErr(createLog({ stdErr: data.toString() })));
    const proxyConsole = new console.Console(stdOut, stdErr);
    const vmContext = { console: proxyConsole, require };
    const vmConfig = {};
    if (timeoutMs) {
      vmConfig.timeout = timeoutMs;
    }
    vm.createContext(vmContext);
    try {
      vm.runInContext(this.code, vmContext, vmConfig);
      this._onExit(0, onExitResolve);
    } catch (err) {
      proxyConsole.error(err);
      const exitCode = err.message === 'Script execution timed out.' ? null : 1;
      this._onExit(exitCode, onExitResolve);
    }
  }
  _onStdErr(log) {
    this.logs.push(log);
    this.emit('stdErr', log);
    this.emit('output', log);
  }
  _onStdOut(log) {
    this.logs.push(log);
    this.emit('stdOut', log);
    this.emit('output', log);
  }
  _onExit(exitCode, onExitResolve) {
    this.exitCode = exitCode;
    this.duration.ended = new Date();
    this.duration.totalSeconds = Math.floor(((+this.duration.ended) - (+this.duration.started)) / 1000);
    onExitResolve(exitCode);
    this.emit('exit', exitCode);
  }
  run(timeoutMs = null) {
    return new Promise(resolve => setTimeout(() => this._init(timeoutMs, resolve), 0));
  }
}

module.exports = NodeJSProcess;