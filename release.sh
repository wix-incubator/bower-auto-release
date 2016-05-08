#!/bin/bash
cd /tmp
rm -rf bower_component
git clone $GIT_REMOTE_URL bower_component
cd bower_component
git checkout bower-component
git checkout -b bower-component
grep -ve "^\(dist\|/.*\.js\)$" .gitignore > .gitignore.new
mv -f .gitignore.new .gitignore
cp -r $PROJECT_DIR/dist .
git add --all .
git commit -m"bower version $1"
git tag $1 -a -m"bower version $1"
git push origin bower-component --follow-tags
shopt -s extglob dotglob