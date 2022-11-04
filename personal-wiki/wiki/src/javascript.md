# Javascript


**Exect Command Nodejs**

```js

async function runCommand(cmd) {
  console.log('\x1b[32m%s\x1b[0m', "+ " + cmd)
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            reject(error.message)
        }
        if (stderr) {
          reject(stderr)
        }
        resolve(stdout)
    });
  })
}

````