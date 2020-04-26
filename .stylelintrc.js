module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss',
  rules: {
    'scss/operator-no-unspaced': null,
    'scss/no-duplicate-dollar-variables': null,
    'comment-word-blacklist': null,
    'font-weight-notation': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'tab-size', 'text-size-adjust']
      }
    ]
  }
};
