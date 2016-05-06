# bower-auto-release
This is a node module that will enable your project to be released to npm and bower in parallel. It relies on the version in your package.json so you'll need to incerement that first. It also relies on an environment var that points to the github repo of the bower component: `$GIT_REMOTE_URL`.
To use run `bower_auto_release` after npm release. It will then do a few things: 1) remove 'dist' from .gitignore 2) create/checkout branch bower-component 3) commit 4) if git tag with version number 5) if anything actually changed - push
