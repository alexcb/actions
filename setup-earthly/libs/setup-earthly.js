const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');

const IS_WINDOWS = process.platform === "win32";
const IS_MAC = process.platform === "darwin";

try {
  console.log(`Setting up earthly`);

  install_cmd = "sudo /bin/sh -c 'wget https://github.com/earthly/earthly/releases/latest/download/earthly-linux-amd64 -O /usr/local/bin/earthly && chmod +x /usr/local/bin/earthly'"
  if (IS_WINDOWS) {
    install_cmd = "sudo /bin/sh -c 'wget https://github.com/earthly/earthly/releases/latest/download/earthly-linux-amd64 -O /usr/local/bin/earthly && chmod +x /usr/local/bin/earthly'"
  }
  else if (IS_MAC) {
    install_cmd = "brew install earthly"
  }

  child_process.exec(, (error, stdout, stderr) => {
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



