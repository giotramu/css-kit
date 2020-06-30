# CSS-Kit

A tiny CSS scaffold for quick, consistent, and scalable user interface development.

[![NPM][npm-img]][npm-url]
[![Bundlephobia][bundlephobia-img]][bundlephobia-url]
[![Test Status][ci-img]][ci-url]
[![Dependencies][deps-img]][deps-url]
[![Dev Dependencies][devdeps-img]][devdeps-url]

## Table of contents

- [CSS-Kit](#css-kit)
  - [Table of contents](#table-of-contents)
  - [CDN usage](#cdn-usage)
    - [What does it do?](#what-does-it-do)
  - [Webpack usage](#webpack-usage)
  - [Color palette](#color-palette)
  - [Dark color scheme](#dark-color-scheme)
  - [Font](#font)
  - [Custom media queries](#custom-media-queries)
  - [Browsers support](#browsers-support)
  - [License](#license)

## CDN usage

Copy/paste the link tag in the head of your `index.html` document:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@giotramu/css-kit" />
```

#### What does it do?

- Corrects bugs and common browser inconsistencies.
- Normalizes styles for a wide range of elements.
- The `css-kit.css` stylesheet provides useful defaults to plain HTML documents.
- A separate stylesheet, `dark-scheme.css`, applies the dark color scheme.
- The `custom-media.css` stylesheet injects the [Custom Media Queries][custom-mq-url].

## Webpack usage

Install CSS-Kit and save them to your package.json `dependencies`:

```sh
npm install @giotramu/css-kit --save
```

Install the [Webpack bundler][webpack-url] by following the official documentation and import the `css-kit.css` as a dependency in the CSS or JavaScript file of your choice.

Import CSS-Kit in CSS:

```css
@import '~@giotramu/css-kit/css-kit.css';
```

Otherwise, import CSS-Kit in JavaScript:

```js
import '@giotramu/css-kit/css-kit.css';
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
      }
    ]
  }
};
```

## Color palette

CSS-Kit has a pre-configured color palette. [Test foreground and background color combos][contrast-grid-url] for compliance with WCAG 2.0 minimum contrast.

|     Color      | CSS Custom Property           |     Value |
| :------------: | :---------------------------- | --------: |
| ![accent-high] | `var(--ck-color-accent-high)` | `#0c57fb` |
| ![accent-low]  | `var(--ck-color-accent-low)`  | `#0072ff` |
|  ![base-high]  | `var(--ck-color-base-high)`   | `#202d3a` |
|  ![base-low]   | `var(--ck-color-base-low)`    | `#5a5c6a` |
| ![light-high]  | `var(--ck-color-light-high)`  | `#e1eaee` |
|  ![light-low]  | `var(--ck-color-light-low)`   | `#fafafa` |

## Dark color scheme

Copy/paste the following script tag in the head of your `index.html` document:

```html
<script
  defer="true"
  crossorigin="anonymous"
  src="https://cdn.jsdelivr.net/npm/@giotramu/css-kit/color-scheme-switcher.js"
></script>
```

Set the triggers for switch the color scheme light/dark:

```html
<button data-ck-trigger="set-color-scheme" class="icon-switch rounded muted">
  <span class="sr-only">Toggle color scheme</span>
</button>

<!-- Totally optional -->
<button data-ck-trigger="unset-color-scheme" class="icon-switch rounded muted">
  <span class="sr-only">Unset color scheme</span>
</button>
```

Optionally, you can set the initial color scheme by adding the attribute `data-color-scheme` to the root tag, with the `light` or `dark` keywords:

```html
<!DOCTYPE html>
<html lang="en" data-color-scheme="dark">
  <!-- ... -->
</html>
```

## Font

Copy/paste the link tag in the head of your `index.html` document:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@giotramu/css-kit/font/giotramu-sans.css"
/>
```

Use the custom font in your styles:

```css
body {
  font-family: giotramu-sans, sans-serif;
}
```

## Custom media queries

Apply the predefined [Custom Media Queries][custom-mq-url] to your responsive layout.

Install CSS-Kit and save them to your package.json `dependencies`:

```sh
npm install @giotramu/css-kit --save
```

Install the [Webpack bundler][webpack-url] by following the official documentation and import the `custom-media.css` as a dependency in the CSS or JavaScript file of your choice.

Import Custom Media Queries in CSS:

```css
@import '~@giotramu/css-kit/src/styles/utils/custom-media.css';
```

Otherwise, import CSS-Kit in JavaScript:

```js
import '@giotramu/css-kit/src/styles/utils/custom-media.css';
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

- Chrome & chromium based browsers (last 3)
- Firefox (last 3)
- Firefox ESR
- Opera (last 3)
- Safari (last 3)
- iOS Safari (last 2)
- Edge (last 3)

## License

[MIT License](./LICENSE)

<!---
  I M A G E S
-->

[bundlephobia-img]: https://badgen.net/bundlephobia/minzip/@giotramu/css-kit
[ci-img]: https://github.com/giotramu/css-kit/workflows/test%20+%20build/badge.svg?branch=stable
[deps-img]: https://badgen.net/david/dep/giotramu/css-kit
[devdeps-img]: https://badgen.net/david/dev/giotramu/css-kit
[npm-img]: https://badgen.net/npm/v/@giotramu/css-kit?label=npm%20package

<!-- Color scheme -->

[accent-high]: https://via.placeholder.com/40/0c57fb/0c57fb.png
[accent-low]: https://via.placeholder.com/40/0072ff/0072ff.png
[base-high]: https://via.placeholder.com/40/202d3a/202d3a.png
[base-low]: https://via.placeholder.com/40/5a5c6a/5a5c6a.png
[light-high]: https://via.placeholder.com/40/e1eaee/e1eaee.png
[light-low]: https://via.placeholder.com/40/fafafa/fafafa.png
[white]: https://via.placeholder.com/40/fff/fff.png
[black]: https://via.placeholder.com/40/000/000.png

<!---
  L I N K S
-->

[bundlephobia-url]: https://bundlephobia.com/result?p=@giotramu/css-kit
[ci-url]: https://github.com/giotramu/css-kit/actions
[custom-mq-url]: ./src/styles/utils/custom-media.css
[deps-url]: https://david-dm.org/giotramu/css-kit
[devdeps-url]: https://david-dm.org/giotramu/css-kit?type=dev
[npm-url]: https://www.npmjs.com/package/@giotramu/css-kit
[postcss-config-url]: https://github.com/giotramu/postcss-config
[postcss-custom-media-url]: https://github.com/postcss/postcss-custom-media
[webpack-url]: https://webpack.js.org
[contrast-grid-url]: http://contrast-grid.eightshapes.com/?background-colors=&foreground-colors=%230c57fb%2C%20accent-high%0D%0A%230072ff%2C%20accent-low%0D%0A%23202D3A%2C%20base-high%0D%0A%235A5C6A%2C%20base-low%0D%0A%23E1EAEE%2C%20light-high%0D%0A%23FAFAFA%2C%20light-low%0D%0A%2313A699%2C%20ok%0D%0A%23FF2F6C%2C%20ko%0D%0A%23FFBE33%2C%20warn%0D%0A%23000%2C%20black%0D%0A%23FFF%2C%20white&es-color-form__tile-size=compact
