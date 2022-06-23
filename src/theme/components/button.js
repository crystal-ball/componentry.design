'use strict'

const { theme } = require('../theme')

module.exports.Button = {
  '.C9Y-Button-docs': {
    'height': '38px',
    'padding': '0 24px',
    'backgroundColor': 'transparent',
    'color': 'var(--button-color)',
    'fontSize': theme.fontSize.button,
    'fontWeight': theme.fontWeight.normal,
    'lineHeight': 1,
    'textTransform': 'uppercase',
    'border': `1px solid`,
    'borderColor': 'var(--button-color)',
    'borderRadius': theme.borderRadius.DEFAULT,

    '&:hover, &.C9Y-hover': {
      borderColor: theme.colors.gray[700],
      color: theme.colors.gray[700],
    },
    '&:active, &.C9Y-active': {
      borderColor: theme.colors.gray[900],
      color: theme.colors.gray[900],
    },
    '&.C9Y-disabled': {
      borderColor: theme.colors.gray[300],
      color: theme.colors.gray[300],
    },
  },
  '.C9Y-Button-docsLargeSize': {
    height: '40px',
    fontSize: '16px',
    padding: '0 2rem',
  },
}
