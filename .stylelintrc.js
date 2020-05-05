module.exports = {
  extends: '@giotramu/stylelint-config/scss',
  rules: {
    'font-weight-notation': ['numeric', {ignore: ['relative']}],
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
