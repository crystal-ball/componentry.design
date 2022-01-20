/* eslint-disable */

'use strict'

const theme = require('./theme')

const Button = {
  '.🅲Button-outlined': {
    'height': '38px',
    'padding': '0 24px',
    'borderColor': theme.colors.gray[600],
    'color': theme.colors.gray[600],
    'fontSize': '14px',
    'fontWeight': 600,
    'lineHeight': 1,
    'textTransform': 'uppercase',

    '&:hover, &.🅲-hover': {
      borderColor: theme.colors.gray[700],
      color: theme.colors.gray[700],
    },
    '&:active, &.🅲-active': {
      borderColor: theme.colors.gray[900],
      color: theme.colors.gray[900],
    },
    '&.🅲-disabled': {
      borderColor: theme.colors.gray[300],
      color: theme.colors.gray[300],
    },
  },
  '.🅲Button-largeSize': {
    height: '40px',
    fontSize: '16px',
    padding: '0 2rem',
  },
}
const Text = {
  '.🅲Text-title': {
    fontSize: '5rem',
    color: theme.colors.gray[800],
    fontFamily: theme.fontFamily.heading,
    fontWeight: 700,
    lineHeight: 1,
  },
  '.🅲Text-h1': {
    fontSize: '3rem',
    color: theme.colors.gray[800],
    fontFamily: theme.fontFamily.heading,
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '0.5px',
  },
  '.🅲Text-lead': {
    fontSize: '1.25rem',
    color: theme.colors.gray[600],
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    lineHeight: 1.5,
    letterSpacing: '0.5px',
  },
  '.🅲Text-overline': {
    fontSize: '0.75rem',
    fontFamily: theme.fontFamily.body,
    color: theme.colors.gray[400],
    textTransform: 'uppercase',
  },
}

module.exports = { Button, Text }
