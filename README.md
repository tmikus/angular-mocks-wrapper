# angular-mocks-wrapper
**angular-mocks-wrapper** is an NPM module which is exposing [Angular.js ngMocks](https://github.com/angular/angular.js) as a CommonJS module.
This library is particularly useful if your project is using [Webpack](https://webpack.github.io/) module bundler.

Angular.js 1.2 does not work well with CommonJS pattern and trying to load the module using "require" function returns empty object.

Some of us developers still have to support a bunch of browsers from last seasons (i.e. IE 8) but we want to use modern tools like Gulp, Webpack etc.
This project can be used as a workaround for problem with loading Angular.js 1.2 using Webpack.

**This project is not needed for Angular.js 1.3 and above**

## Installation
To install the library simply run:
```
npm install --save angular-mocks-wrapper
```

## Usage
Here is example of loading Angular.js ngMock using this wrapper:
```
var ngMock = require("angular-mocks-wrapper");

beforeEach(ngMock.inject(function (myService) {
  // TODO: test setup code goes here
}));
```
