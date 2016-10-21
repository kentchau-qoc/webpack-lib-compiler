# WebPack Libary Compiler (ES6 > ES5)

#### IMPORTANT NOTE
- ALL ES6 source code that requires compiling are to be placed in the `src` folder
- Compiled ES5 source code will be exported into the `dist` folder
- During compilation, the `dist` folder will be cleared of ALL contents (files and folders)

___
## Introduction

This utility tool uses WebPack to compile ES6 JavaScript Libraries into ES5 JavaScript.

___
## System Requirements
- Node Version 4.x.x
- ESLint setting are based on a modified version of AirBnb's JS ESLint configuration (https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

___
## Installation
- Install command

  ```
  npm install
  ```
___
## Usage

### Production Ready Build
- Builds and compiles source into a single file (minified)

  ```
  npm run build
  ```

### Development Build
- Builds and compiles source into a single file (non-minified)

  ```
  npm run dev
  ```

### Test Build
- Executes Chai/Mocha unit tests on ALL JS files
  ```
  npm run test
  ```
