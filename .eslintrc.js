'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // Removing ' and " from entities that require escaping, this rule is
    // intended to help accidentally messing up the JSX but linting/highlighting
    // catch 99% of that and escaping quotes is cumbersome
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
        ],
      },
    ],
  },
}
