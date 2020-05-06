module.exports = {
  extends: '@giotramu/stylelint-config/scss',
  rules: {
    //'font-weight-notation': ['numeric', {ignore: ['relative']}],
    'font-weight-notation': null,
    'declaration-property-value-blacklist': {
      '/^border(?!-(width|spacing))/': [
        /thin/,
        /medium/,
        /thick/,
        '0' // prefer `none`
      ]
    }
  }
};
