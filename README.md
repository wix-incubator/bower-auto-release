# bower-auto-release
This is a node module that will enable your project to be released to npm and bower in parallel. It relies on the version in your package.json so you'll need to incerement that first. It also relies on two environment vars: `$GIT_REMOTE_URL` & `$PROJECT_DIR`.
To use run `bower_auto_release` after npm release. It will then commit the dist folder on bower-component branch, tag the commit and push.
