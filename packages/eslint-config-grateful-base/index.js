module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  }
};
