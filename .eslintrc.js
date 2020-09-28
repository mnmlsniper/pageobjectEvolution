module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['jest'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  settings: {
    jest: {
      version: 26,
    },
  },
};
