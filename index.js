#!/usr/bin/env node
var workingDir = process.cwd();
var packageJson = require(workingDir + '/package.json');

require('child_process')
  .spawn(__dirname + '/release.sh', [packageJson.version, workingDir],  {stdio: 'inherit'})
  .on('error', function (x) { console.log(x) });