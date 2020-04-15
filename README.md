# CSS Kit

Personal CSS library that provides consistent, cross-browser and useful defaults.

[![NPM][npm-badge]][npm]
![Bundle Size][bundle-size-badge]
[![Test Status][ci-badge]][ci]
[![Dependencies][deps-badge]][deps]
[![Dev Dependencies][devdeps-badge]][devdeps]

## Table of contents

- [CSS Kit](#css-kit)
  - [CDN Usage](#cdn-usage)
  - [Install](#install)
  - [Webpack usage](#webpack-usage)
  - [CSS Custom Properties](./docs/custom-properties.md)
  - [CSS Custom Media](./docs/custom-media.md)
  - [Browsers support](#browsers-support)
  - [Thanks](#thanks)
  - [License](#license)

## CDN Usage

Put the link tags in the head of your `index.html` document:

```html
<!-- CSS Sanitizer -->
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/reset.css" />

<!-- Personal & Common Styles -->
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/common.css" />
```

#### What does it do?

- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- A separate stylesheet (`common.css`) provides useful and **personal** defaults to plain HTML documents. [This file includes some CSS Custom Properties (aka CSS variables)](./docs/custom-properties.md).

## Install

Install CSS-Kit and save them to your **package.json** `dependencies`:

```sh
npm install @giotramu/css-kit --save
```

## [Webpack][webpack] usage

Import css-kit in CSS:

```css
/* CSS Sanitizer */
@import '~@giotramu/css-kit/reset.css';

/* Personal & Common Styles */
@import '~@giotramu/css-kit/common.css';
```

Alternatively, import css-kit in JS:

```js
// CSS Sanitizer
import '@giotramu/css-kit/reset.css';

// Personal & Common Styles
import '@giotramu/css-kit/common.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders:

```js
module.exports = {
  //--- other webpack configuration stuffs...
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

#### CSS Custom Media Queries

You can consume the predefined [CSS Custom Media Queries](./docs/custom-media.md). In Webpack bundler, import the `custom-media.css` as dependency.

Import Custom Media in CSS:

```css
@import '~@giotramu/css-kit/custom-media.css';
```

Import Custom Media in JavaScript:

```js
import '@giotramu/css-kit/custom-media.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders and the [postcss-custom-media] plugin:

```js
module.exports = {
  //--- other webpack configuration stuffs...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [postcssCustomMedia(/* pluginOptions */)]
            }
          }
        ]
      }
    ]
  }
};
```

Alternatively, you can use [@giotramu/postcss-config] in conjunction with postcss-loader or postcss-cli.

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
  B A D G E S
-->

[bundle-size-badge]: https://badgen.net/badge/unpacked%20size/172kb/blue
[ci-badge]: https://github.com/giotramu/css-kit/workflows/test/badge.svg?branch=master
[deps-badge]: https://badgen.net/david/dep/giotramu/css-kit
[devdeps-badge]: https://badgen.net/david/dev/giotramu/css-kit
[npm-badge]: https://badgen.net/npm/v/@giotramu/css-kit?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[@giotramu/postcss-config]: https://github.com/giotramu/postcss-config
[ci]: https://github.com/giotramu/stylelint-config/actions
[deps]: https://david-dm.org/giotramu/css-kit
[devdeps]: https://david-dm.org/giotramu/css-kit?type=dev
[normalize.css]: https://github.com/csstools/normalize.css
[npm]: https://www.npmjs.com/package/@giotramu/css-kit
[postcss-custom-media]: https://github.com/postcss/postcss-custom-media
[reset.css]: http://meyerweb.com/eric/tools/css/reset
[sanitize.css]: https://github.com/csstools/sanitize.css
[webpack]: https://webpack.js.org
