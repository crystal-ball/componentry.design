'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': ['error', { ignore: ['componentry/api-docs'] }],
    'jsx-a11y/anchor-is-valid': 'off',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
      },
    },
    {
      files: ['src/theme/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
    },
  ],
}
