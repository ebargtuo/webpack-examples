# Webpack Examples

[![Build Status](https://travis-ci.org/ebargtuo/webpack-examples.svg?branch=master)](https://travis-ci.org/ebargtuo/webpack-examples)

Examples of how to use [webpack](https://github.com/webpack/webpack) and various
webpack addons.

## Usage

There is one `package.json` file which includes all build and test dependencies.

### Installation

In the top level directory:

```
npm install
```

### Build

To build all examples, in the top level directory:

```
make
```

To build one example, change to the example's directory and:

```
`npm bin`/webpack
```

### Test Built Files

There are tests to verify the expected files are present in the build output
directories. For all examples, in the top level directory:

```
make test
```

### Acceptance Tests

There are acceptance tests for the webpack examples. They're run with selenium
webdriver using phantomjs. To test all examples, in the top level directory:

```
make acceptanceTest
```

To run one test, change to the example's directory and:

```
PATH=`npm bin`:$PATH mocha
```

## License

Copyright (c) 2015 ebargtuo

MIT (http://www.opensource.org/licenses/mit-license.php)

## Attributions

Parts of these example configurations are derived from other examples and
documentation.

Basic HTML template is based on ideas from the
[HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate) project.

The test to verify built files in the distribution directories is adapted from
a
[similar test](https://github.com/h5bp/html5-boilerplate/blob/master/test/file_existence.js)
in the [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate) project.
