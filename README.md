This is a trial egg.js taos3 version of a package, only for personal use, I have no time to solve the error, please understand.
# egg-taos

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mqtt.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mqtt
[travis-image]: https://img.shields.io/travis/eggjs/egg-mqtt.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mqtt
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mqtt.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mqtt?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mqtt.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mqtt
[snyk-image]: https://snyk.io/test/npm/egg-mqtt/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mqtt
[download-image]: https://img.shields.io/npm/dm/egg-mqtt.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mqtt

<!--
Description here.
-->

## Install

```bash
$ npm i egg-taos --save
```

## Usage

```js
// app/config/plugin.js
module.exports = {
    taos: {
        enable: true,
        package: "egg-taos",
    };
}
```

## Configuration

```js
// app/config/config.default.js
config.taos = {
    client: {
      host: "",
      port: 6041,
      user: root,
      passwd: "",
      db: "",
    }
  };
```

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

