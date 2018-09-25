const EventEmitter = require('events');
const { exec } = require('child_process');
const createLog = require('./log');

class ShellProcess extends EventEmitter {
  constructor() {
    super();
    this.logs = null;
    this.exitCode = null;
    this.execHandle = null;
    this.duration = {
      started: null,
      ended: null,
      totalSeconds: null
    };
  }
  _init(cmd, onExitResolve) {
    this.logs = [];
    this.exitCode = null;
    this.duration = {
      started: new Date(),
      ended: null,
      totalSeconds: null
    };
    this.execHandle = exec(cmd);
    this.execHandle.stdout.on('data', data => this._onStdOut(createLog({ stdOut: data.toString() })));
    this.execHandle.stderr.on('data', data => this._onStdErr(createLog({ stdErr: data.toString() })));
    this.execHandle.on('exit', statusCode => this._onExit(statusCode, onExitResolve));
  }
  _tryGetExecHandle() {
    if (!this.execHandle) {
      throw new Error('process is not running.');
    }
    return this.execHandle;
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
    this.execHandle.stdout.removeAllListeners();
    this.execHandle.stderr.removeAllListeners();
    this.execHandle = null;
    this.exitCode = exitCode;
    this.duration.ended = new Date();
    this.duration.totalSeconds = Math.floor(((+this.duration.ended) - (+this.duration.started)) / 1000);
    onExitResolve(exitCode);
    this.emit('exit', exitCode);
  }
  run(cmd) {
    if (this.execHandle) {
      throw new Error('process is still running.');
    }
    return new Promise(resolve => this._init(cmd, resolve));
  }
  writeStdIn(cmd) {
    return new Promise((resolve, reject) => {
      this._tryGetExecHandle().stdin.write(`${cmd}\n`, err => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }
  kill(signal = 'SIGTERM') {
    this._tryGetExecHandle().kill(signal);
  }
}

module.exports = ShellProcess;
