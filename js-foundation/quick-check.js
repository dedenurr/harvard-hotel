const os = require('os');
console.log('Hello from Node!', {
  node: process.version,
  platform: os.platform(),
  arch: os.arch(),
});
