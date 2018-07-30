General-purpose eslint linting
==============================

[![npm version](https://img.shields.io/npm/v/@spasdk/eslint.svg?style=flat-square)](https://www.npmjs.com/package/@spasdk/eslint)
[![dependencies status](https://img.shields.io/david/spasdk/eslint.svg?style=flat-square)](https://david-dm.org/spasdk/eslint)
[![devDependencies status](https://img.shields.io/david/dev/spasdk/eslint.svg?style=flat-square)](https://david-dm.org/spasdk/eslint?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/spasdk)


## Installation ##

```bash
npm install @spasdk/eslint
```


## Usage ##

Add file `.eslintrc.js` to your project with the following content:

```js
module.exports = {
    extends: require.resolve('@spasdk/eslint')
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

`@spasdk/eslint` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
