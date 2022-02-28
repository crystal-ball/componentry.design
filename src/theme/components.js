/* eslint-disable */

'use strict'

const theme = require('./theme')

const Button = {
  '.C9Y-Button-outlined': {
    'height': '38px',
    'padding': '0 24px',
    'borderColor': theme.colors.gray[600],
    'color': theme.colors.gray[600],
    'fontSize': '14px',
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
const Text = {
  '.C9Y-Text-title': {
    fontSize: '5rem',
    color: theme.colors.primary[500],
    fontFamily: theme.fontFamily.display,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1,
    letterSpacing: 0,
  },
  '.C9Y-Text-h1': {
    fontSize: '3rem',
    color: theme.colors.heading,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-h2': {
    fontSize: '2rem',
    color: theme.colors.heading,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  '.C9Y-Text-h3': {
    fontSize: '1.5rem',
    color: theme.colors.heading,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-subtitle': {
    fontSize: '1rem',
    color: theme.colors.body,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-lead': {
    'fontSize': '1.25rem',
    'color': theme.colors.body,
    'fontFamily': theme.fontFamily.body,
    'fontWeight': theme.fontWeight.normal,
    'lineHeight': 1.5,
    'letterSpacing': '0.5px',

    // Set spacing between multiple paragraphs using sibling selector and
    // margin-top.
    '& + &': {
      marginTop: theme.spacing[2],
    },
  },
  '.C9Y-Text-body': {
    fontSize: '1rem',
    color: theme.colors.body,
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    lineHeight: theme.lineHeight.normal,
  },
  '.C9Y-Text-detail': {
    fontSize: '0.875rem',
    color: theme.colors.body,
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    lineHeight: '1.125rem',
  },
  '.C9Y-Text-overline': {
    fontSize: '0.75rem',
    fontFamily: theme.fontFamily.body,
    color: theme.colors.muted,
    textTransform: 'uppercase',
    lineHeight: 1,
  },
}

module.exports = { Button, Text }
