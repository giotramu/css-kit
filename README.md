# CSS Kit

Personal CSS library that provides consistent, cross-browser and useful defaults.

[![NPM][npm-badge]][npm]
[![Test Status][ci-badge]][ci]
[![Dependencies][deps-badge]][deps]
[![Dev Dependencies][devdeps-badge]][devdeps]

## Usage

Put the link tags in the head of your `index.html` document:

```html
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/reset.css" />
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/common.css" />
```

#### What does it do?

- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- A separate stylesheet (`css-kit/common.css`) provides useful and **personal** defaults to plain documents.

## Install

```sh
npm install @giotramu/css-kit --save
```

#### [Webpack][webpack] usage

Import css-kit in CSS:

```css
@import '~@giotramu/css-kit/reset.css';
@import '~@giotramu/css-kit/common.css';
```

Alternatively, import css-kit in JS:

```js
import '@giotramu/css-kit/reset.css';
import '@giotramu/css-kit/common.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.woff(2)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
```

## Browsers support

- Chrome & Chromium based browsers (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Edge (last 3)

## Thanks

- [normalize.css]
- [reset.css]
- [sanitize.css]

## License

[MIT License](./LICENSE)

<!---
  L I N K S
-->

[npm]: https://www.npmjs.com/package/@giotramu/css-kit
[npm-badge]: https://badgen.net/npm/v/@giotramu/css-kit?icon=npm&label=npm%20package
[ci]: https://github.com/giotramu/stylelint-config/actions
[ci-badge]: https://github.com/giotramu/css-kit/workflows/test/badge.svg?branch=master
[deps]: https://david-dm.org/giotramu/css-kit
[deps-badge]: https://badgen.net/david/dep/giotramu/css-kit
[devdeps]: https://david-dm.org/giotramu/css-kit?type=dev
[devdeps-badge]: https://badgen.net/david/dev/giotramu/css-kit
[webpack]: https://webpack.js.org/
[normalize.css]: https://github.com/csstools/normalize.css
[reset.css]: http://meyerweb.com/eric/tools/css/reset
[sanitize.css]: https://github.com/csstools/sanitize.css
