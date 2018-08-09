General-purpose eslint linting
==============================

[![npm version](https://img.shields.io/npm/v/spa-eslint.svg?style=flat-square)](https://www.npmjs.com/package/spa-eslint)
[![dependencies status](https://img.shields.io/david/spasdk/eslint.svg?style=flat-square)](https://david-dm.org/spasdk/eslint)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/eslint.svg?style=flat-square)](https://david-dm.org/spasdk/eslint?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


## Installation ##

```bash
npm install spa-eslint --save-dev
```


## Usage ##

Add file `.eslintrc.js` to your project with the following content:

```js
module.exports = {
    extends: require.resolve('spa-eslint')
};
```

Run linting for your project:

```bash
npx eslint .
```


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/spasdk/eslint/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`spa-eslint` is released under the [MIT License](license.md).
