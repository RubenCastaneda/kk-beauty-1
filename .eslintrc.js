module.exports = {
  env: { browser: true, es2021: true },
  extends: ['eslint:recommended','plugin:react/recommended','prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn'
  },
};
