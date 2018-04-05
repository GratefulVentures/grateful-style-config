# A Style Guide for Grateful Javascript

ESLint configurations and bundles to enable rules and formatting based on:

* ESLint/recommended
* Prettier/recommended
* React/recommended _(requires babel-eslint parser)_

### What's Here?

A repo containing source code for Grateful's ESLint config packages. The following packages are maintained using [Lerna](https://github.com/lerna/lerna#commands):

* __NodeJS__: packages/eslint-config-grateful-node

  First install the package:
  ```
  npm i @grateful/eslint-config-node
  ```

  then add the ESLint config:
  ```js
  // .eslintrc.js
  module.exports = {
    extends: [
      '@grateful/node'
    ]
  };
  ```

* __ReactJS__ packages/eslint-config-grateful (_in progress_)
* __All-in-one__ packages/eslint-config-grateful-bundle (_in progress_)
