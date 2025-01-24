This is a trial egg.js taos3 version of a package, only for personal use, I have no time to solve the error, please understand.
# egg-taos

Night in Ulaanbaatar

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

