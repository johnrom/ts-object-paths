module.exports = {
  root: true,
  env: {
    node: true,
  },
  exclude: ['./dist', './node_modules', './temp'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {},
};
