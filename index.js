#!/usr/bin/env node
var packageJson = require(process.cwd() + '/package.json');

require('child_process')
  .spawn('node_modules/bower-auto-release/release.sh', [packageJson.version],  {stdio: 'inherit'});