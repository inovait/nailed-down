const fs = require('fs');
const { markdownCodeExecute, produceMarkdownFromExecutedProcess } = require('../lib/markdown-processor');
async function execute(markdownPath) {
  const markdownText = fs.readFileSync(markdownPath, 'utf8');
  const { promiseProcessExit, process } = markdownCodeExecute(markdownText);
  process.on('stdErr', log => console.error(log.stdErr));
  process.on('stdOut', log => console.log(log.stdOut));
  const exitCode = await promiseProcessExit;
  process.removeAllListeners();
  console.log('Exit code: ', exitCode);
  return `${markdownText}\n\n${produceMarkdownFromExecutedProcess(process)}`;
}
async function main() {
  const readPrefix = './examples/markdowns/';
  const writePrefix = './examples/markdowns/outputs/';
  const markdownPaths = [
    'javascript.md',
    'javascript-error.md',
    'javascript-timeout.md',
    'shell-only.md',
    'shell-only-error.md',
    'shell-only-timeout.md',
    'bash-simple.md',
    'bash-simple-error.md',
    'bash-simple-timeout.md',
    'bash-commands.md',
    'ssh-simple.md',
    'ssh-simple-error.md',
    'ssh-simple-timeout.md',
    'ssh-commands.md',
    'ssh-commands-timeout.md'
  ];
  for (const mdPath of markdownPaths) {
    const finalMarkdown = await execute(`${readPrefix}${mdPath}`);
    fs.writeFileSync(`${writePrefix}${mdPath}`, finalMarkdown, 'utf8');
  }
}
main();

