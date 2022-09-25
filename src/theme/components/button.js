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
    'borderColor': 'var(--button-docs-color)',
    'borderRadius': theme.borderRadius.DEFAULT,

    '&:hover, &.C9Y-hover': {
      borderColor: 'var(--button-docs-hover-color)',
      color: 'var(--button-docs-hover-color)',
    },
    '&:active, &.C9Y-active': {
      borderColor: 'var(--button-docs-active-color)',
      color: 'var(--button-docs-active-color)',
    },
    '&.C9Y-disabled': {
      borderColor: 'var(--button-docs-disabled-color)',
      color: 'var(--button-docs-disabled-color)',
    },
  },
  '.C9Y-Button-docsLargeSize': {
    height: '40px',
    fontSize: '16px',
    padding: '0 2rem',
  },
}
