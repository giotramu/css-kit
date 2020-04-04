module.exports = {
  extends: '@giotramu/stylelint-config',
  defaultSeverity: 'error',
  rules: {
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignoreProperties: ['width', 'height']
      }
    ],
    'font-family-no-duplicate-names': [
      true,
      {
        ignoreFontFamilyNames: ['monospace']
      }
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance', 'tab-size']
      }
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['fit-content', 'tab-size']
      }
    ]
  }
};
