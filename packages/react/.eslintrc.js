module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
  },
  extends: ['@sentry-internal/sdk', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['build/**', 'dist/**', 'esm/**', 'examples/**', 'scripts/**'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
    {
      files: ['test/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
};
