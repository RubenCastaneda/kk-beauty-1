// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',           // ← parse TS
  plugins: ['@typescript-eslint', 'prettier'],   // ← lint TS + Prettier
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',     // ← TS rules
    'plugin:prettier/recommended'                // ← Prettier last
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn'
  }
};
