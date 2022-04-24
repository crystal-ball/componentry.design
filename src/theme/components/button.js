'use strict'

const { theme } = require('../theme')

module.exports.Button = {
  '.C9Y-Button-outlined': {
    'height': '38px',
    'padding': '0 24px',
    'borderColor': theme.colors.gray[600],
    'color': theme.colors.gray[600],
    'fontSize': theme.fontSize.button,
    'fontWeight': theme.fontWeight.normal,
    'lineHeight': 1,
    'textTransform': 'uppercase',

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
  '.C9Y-Button-largeSize': {
    height: '40px',
    fontSize: '16px',
    padding: '0 2rem',
  },
}
