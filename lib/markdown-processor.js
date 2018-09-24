const ShellProcess = require('./shell-process');
const NodeJSProcess = require('./nodejs-process');

function execute(processType, inputData) {
  switch (processType) {
    case 'shell': {
      const { processExecution, codeSequence, timeoutSeconds, code } = inputData;
      const process = new ShellProcess();
      let promiseProcessExit = null;
      if (processExecution) {
        promiseProcessExit = process.run(processExecution);
        for (const command of codeSequence) {
          process.writeStdIn(command).catch(e => e);
        }
        // guaranteed exit so the process isnt stuck in shell.
        process.writeStdIn('exit').catch(e => e);
      } else {
        //its a simple shell markdown, only execute direct markdown code segment (```code```)
        promiseProcessExit = process.run(code.trim());
      }
      if (timeoutSeconds) {
        setTimeout(() => process.execHandle && process.kill(), timeoutSeconds * 1000);
      }
      return { promiseProcessExit, process };
    }
    case 'javascript': {
      const { timeoutSeconds, code } = inputData;
      const process = new NodeJSProcess(code);
      const timeoutMS = timeoutSeconds ? timeoutSeconds * 1000 : null;
      const promiseProcessExit = process.run(timeoutMS);
      return { promiseProcessExit, process };
    }
    default: {
      throw new Error(`Process ${processType} not supported`);
    }
  }
}

function markdownCodeExecute(inputBody) {
  const markdown = (/```[\s\S]*```/g).exec(inputBody);
  if (!markdown || !markdown.length) {
    throw new Error('Markdown not found');
  }
  /* 
    TODO: Do parsing more intuitive. As this is barely readable.
  */
  const body = markdown[0].trim();
  const infoEndPos = body.search('\n');
  const infoConfigStartPos = body.search(' ');
  const infoStr = body.substring(3, infoEndPos);
  const processType = infoStr.split(' ')[0].trim();
  const config = infoStr.substr(infoStr.search(' ')).trim();

  let timeoutSeconds = null;
  let processExecution = config;
  const timeoutResult = (/(TIMEOUT (\d+))[\s\S]*$/g).exec(config);
  if (timeoutResult) {
    timeoutSeconds = parseInt(timeoutResult[2]);
    const timeoutCmd = timeoutResult[1];
    processExecution = config.replace(timeoutCmd, '').trim();
  }
  const code = body.substring(infoEndPos, body.length - 3);
  const codeCleaned = code.split('\n').filter(line => line).join('\n');
  const codeSequence = codeCleaned.split('\n');
  const inputData = {
    processExecution, // what will be executed (for example in shell: bash, ssh,..)
    timeoutSeconds, //is there given a timeout for process execution
    codeSequence, // each line of code is here filtered into array.
    code, //raw input code inside '``` ```' markdown
  };
  return execute(processType, inputData);
}

function setColor(color, text) {
  return `<span style='color:${color}'>${text}</span>`;
}

function produceMarkdownFromExecutedProcess(process) {
  let executionMarkdown = '\n --- \n #### Runtime output  \n\n';
  const exitCode = process.exitCode;
  process.logs.forEach(log => {
    executionMarkdown += `* ${log.stdErr ? '<span style="color: red">stderr </span>' : ''}${log.ts.toISOString()}\n\n \`\`\`\n${log.stdErr || log.stdOut || null}\n\`\`\` \n`;
  })
  return `${executionMarkdown}\n > ${exitCode === null ? setColor('red', 'Process killed') : setColor(exitCode === 0 ? 'green' : 'orange', `Process exited with status code ${exitCode}`)} (duration ${process.duration.totalSeconds} seconds)`;
}

module.exports = {
  markdownCodeExecute,
  produceMarkdownFromExecutedProcess
};