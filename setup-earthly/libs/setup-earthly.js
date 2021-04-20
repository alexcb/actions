const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');

try {
  console.log(`Setting up earthly`);

  child_process.exec("sudo /bin/sh -c 'wget https://github.com/earthly/earthly/releases/latest/download/earthly-linux-amd64 -O /usr/local/bin/earthly && chmod +x /usr/local/bin/earthly && /usr/local/bin/earthly bootstrap') => {
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



