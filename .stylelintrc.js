module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss',
  defaultSeverity: 'error',
  rules: {
    'scss/operator-no-unspaced': null,
    'property-no-unknown': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'tab-size', 'text-size-adjust']
      }
    ]
  }
};
