/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  // plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  // "rules": {
  //   "@typescript-eslint/no-explicit-any": 1
  // }
}
