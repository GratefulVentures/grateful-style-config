# A Style Guide for Grateful Javascript

ESLint configurations and bundles to enable rules and formatting based on:

* ESLint/recommended
* Prettier/recommended
* React/recommended _(requires babel-eslint parser)_

## What's Here?

The following ESLint packages are maintained using [Lerna](https://github.com/lerna/lerna#commands).

* [NodeJS](#nodejs) _`packages/eslint-config-grateful-node`_
* [ReactJS](#reactjs) _`packages/eslint-config-grateful-react`_

#### __NodeJS__

  First install the package:
  ```
  npm i @grateful/eslint-config-node
  ```

  then add the ESLint config:
  ```yaml
  # .eslintrc
  extends: '@grateful/node'
  ```

#### __ReactJS__
  First install the package:
  ```
  npm i @grateful/eslint-config-react
  ```

  then add the ESLint config:
  ```yaml
  # .eslintrc
  extends: '@grateful/react'
  ```
* __All-in-one__ packages/eslint-config-grateful-bundle (_in progress_)
