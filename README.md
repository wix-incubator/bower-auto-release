# bower-auto-release
This is a node module that will enable your project to be released to npm and bower in parallel. It relies on the version in your package.json so you'll need to run `npm release` first. It also relies on environment var `$GIT_REMOTE_URL`.
# To use ... 
run `bower-auto-release` in release scripts *after*  `npm release`. It will then commit the `dist` folder on branch `bower-component`, tag that commit with current version, and, if anything changed _push_ to remote.
