const options = {
  debug: false
};

module.exports = require('@giotramu/postcss-config/lib/extends')(
  [
    ['cssnano', false],
    ['postcss-custom-media', false]
  ],
  options
);
