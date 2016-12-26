# bower-auto-release

This node module will help you to publish your package to bower in addition to already publishing it to npm.
Ideally you would only publish to npm, but as many older projects still use bower, this is sometime an unfortunate necessity.

## How to enable bower publishing for your existing npm module

Assuming you already defined you npm module in CI and already use the incredible [wnpm-release](https://github.com/wix-private/wnpm/tree/master/wnpm-ci) script to automatically bump your node module's version all you have to do in order to publish your package to bower is follow this simple steps:

### Add bower.json to your project

Just run the command `bower init`, and answer truthfully to all questions :P

### Add .bowerrc to your project

Notice: this is relevant only if you wish to publish your component to a private registry.

Example: https://github.com/wix-private/wix-style/blob/master/.bowerrc

This is critical so that we work against wix's private bower registry

### Run bower-auto-release in your release script

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {
    "build": ":", 
    "test": ":",
    "release": "wnpm-release; bower-auto-release",
    "postpublish": "rm -f npm-shrinkwrap.json"
  },
  "devDependencies": {
    "wnpm-ci": "*",
    "bower-auto-release": "*"
  }
}
```

### The `--dist` option

By default the contents of your post-build dist folder will be copied to the bower-component's root folder. You can change this behaviour by designating a different folder with the `--dist` option. 

For example to copy the contents of the `build` output folder you would use: `bower-auto-release --dist build`

Or, to copy everything simply use `--dist .` (take note that in such a case `dist` will be removed from `.gitignore` on the bower-component branch).

### The `--git-repo` option

By default your project is pulled from the repository designated by the `GIT_REMOTE_URL` environment variable. You can change this behaviour by designating a different repository with the `--git-repo` option.

For example: `bower-auto-release --git-repo git@github.com:wix/my-library`

This option is typically used on monorepos that have multiple bowers to release. Since bower's design dictates one-to-one relationship between published component and git repo, you should create a separate repo for publishing and pass it using this option.

### The `--branch` option

By default your project is published to a branch named `${package-name}-bower`. You can change this using the `--branch` option.

For example: `bower-auto-release --branch kuku`

In case you use a separate repo for publishing bowers from monorepo as described above, it might make sense to do something like this: 
`bower-auto-release --git-repo git@github.com:wix/my-library-bower --branch master`

### Your package is automatically registered to bower

Once you're build is complete in CI, your package can be installed with - 
```sh
bower install package-name
```
where `package-name` is the name you gave your package in `bower init` above
