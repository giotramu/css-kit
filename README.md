# CSS Kit

Personal CSS library that provides consistent, cross-browser and useful defaults.

### 🚧 In the development stage.

---

[![NPM][npm-img]][npm-url]
![Bundle Size][bundle-size-img]
[![Test Status][ci-img]][ci-url]
[![Dependencies][deps-img]][deps-url]
[![Dev Dependencies][devdeps-img]][devdeps-url]

## Table of contents

- [CSS Kit](#css-kit)
  - [CDN Usage](#cdn-usage)
  - [Install](#install)
  - [Webpack usage](#webpack-usage)
  - [CSS Custom Properties][css-custom-properties]
  - [CSS Custom Media][css-custom-mq]
  - [Browsers support](#browsers-support)
  - [Thanks](#thanks)
  - [License](#license)

## CDN Usage

Put the link tags in the head of your `index.html` document:

```html
<!-- CSS Normalizer -->
<link
  rel="stylesheet"
  href="https://unpkg.com/@giotramu/css-kit/normalizer.css"
/>

<!-- Personal & Common Styles -->
<link rel="stylesheet" href="https://unpkg.com/@giotramu/css-kit/common.css" />
```

#### What does it do?

- Normalizes styles for a wide range of elements (like `normalize.css`, but smaller).
- Corrects bugs and common browser inconsistencies.
- A separate stylesheet (`common.css`) provides useful and personal defaults to plain HTML documents. This stylesheet dispatches the [CSS Custom Properties][css-custom-properties].
- A separate stylesheet (`custom-media.css`) dispatches the [CSS Custom Media Queries][css-custom-mq].

## Install

Install CSS-Kit and save them to your **package.json** `dependencies`:

```sh
npm install @giotramu/css-kit --save
```

## [Webpack][webpack-url] usage

Import css-kit in CSS:

```css
/* CSS Normalizer */
@import '~@giotramu/css-kit/normalizer.css';

/* Personal & Common Styles */
@import '~@giotramu/css-kit/common.css';
```

Alternatively, import css-kit in JS:

```js
// CSS Normalizer
import '@giotramu/css-kit/normalizer.css';

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

You can consume the predefined [CSS Custom Media Queries](./docs/custom-media.md). If you have the Webpack bundler installed, import the `custom-media.css` as a dependency in your CSS or JavaScript file.

Import Custom Media in CSS:

```css
/* Custom Media Queries */
@import '~@giotramu/css-kit/custom-media.css';
```

Import Custom Media in JavaScript:

```js
// Custom Media Queries
import '@giotramu/css-kit/custom-media.css';
```

In `webpack.config.js`, be sure to use the appropriate loaders and the [postcss-custom-media][postcss-custom-media-url] plugin:

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

Alternatively, you can use [@giotramu/postcss-config][postcss-config-url] in conjunction with postcss-loader or postcss-cli.

## Browsers support

- Chrome & Chromium based browsers (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Edge (last 3)

## License

[MIT License](./LICENSE)

<!---
  B A D G E S
-->

[bundle-size-img]: https://badgen.net/badge/unpacked%20size/172kb/blue
[ci-img]: https://github.com/giotramu/css-kit/workflows/test/badge.svg?branch=master
[deps-img]: https://badgen.net/david/dep/giotramu/css-kit
[devdeps-img]: https://badgen.net/david/dev/giotramu/css-kit
[npm-img]: https://badgen.net/npm/v/@giotramu/css-kit?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[css-custom-properties]: ./src/abstract/_custom-properties.scss
[css-custom-mq]: ./src/custom-media.scss
[ci-url]: https://github.com/giotramu/css-kit/actions
[deps-url]: https://david-dm.org/giotramu/css-kit
[devdeps-url]: https://david-dm.org/giotramu/css-kit?type=dev
[npm-url]: https://www.npmjs.com/package/@giotramu/css-kit
[postcss-config-url]: https://github.com/giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[webpack-url]: https://webpack.js.org
