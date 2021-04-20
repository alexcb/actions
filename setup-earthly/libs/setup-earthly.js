const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');

try {
  console.log(`Setting up earthly`);

  child_process.exec("touch /hello", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });

} catch (error) {
  core.setFailed(error.message);
}



