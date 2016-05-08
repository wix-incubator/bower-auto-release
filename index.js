#!/usr/bin/env node
var workingDir = process.cwd();
var packageJson = require(workingDir + '/package.json');

require('child_process')
  .spawn(workingDir + '/release.sh', [packageJson.version, workingDir],  {stdio: 'inherit'});