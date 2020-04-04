# CSS Kit

Personal CSS library that provides consistent, cross-browser and useful defaults.

[![NPM][npm-badge]][npm]
[![Dependencies][deps-badge]][deps]
[![Dev Dependencies][devdeps-badge]][devdeps]

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/resets.css" />
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/commons.css" />
```

#### What does it do?

- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- A separate stylesheet (`css-kit/commons.css`) provides **common, useful and personal defaults** to plain documents.

## Install

```sh
npm install @giotramu/css-kit --save
```

#### Webpack usage

Import css-kit in CSS:

```css
@import '~@giotramu/css-kit/reset.css';
@import '~@giotramu/css-kit/commons.css';
```

Alternatively, import css-kit in JS:

```js
import '@giotramu/css-kit/reset.css';
import '@giotramu/css-kit/commons.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

## Browser support

- Chrome and all Chromium based browsers (last 3)
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
[deps]: https://david-dm.org/giotramu/css-kit
[deps-badge]: https://badgen.net/david/dep/giotramu/css-kit
[devdeps]: https://david-dm.org/giotramu/css-kit?type=dev
[devdeps-badge]: https://badgen.net/david/dev/giotramu/css-kit
[normalize.css]: https://github.com/csstools/normalize.css
[reset.css]: http://meyerweb.com/eric/tools/css/reset
[sanitize.css]: https://github.com/csstools/sanitize.css
