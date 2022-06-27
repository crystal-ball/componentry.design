'use strict'

const { theme } = require('../theme')

module.exports.Text = {
  '.C9Y-Text-title': {
    fontSize: '5rem',
    color: theme.colors.primary[500], // #2529c3
    fontFamily: theme.fontFamily.display,
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1,
    letterSpacing: 0,
  },
  '.C9Y-Text-h1': {
    fontSize: '3rem',
    color: 'var(--textColor-heading)',
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-h2': {
    fontSize: '2rem',
    color: 'var(--textColor-heading)',
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  '.C9Y-Text-h3': {
    fontSize: '1.5rem',
    color: 'var(--textColor-heading)',
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1.25,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-subtitle': {
    fontSize: '1rem',
    color: 'var(--textColor-body)',
    fontWeight: theme.fontWeight.bold,
    lineHeight: 1,
    letterSpacing: '0.5px',
  },
  '.C9Y-Text-lead': {
    'fontSize': '1.25rem',
    'color': 'var(--textColor-body)',
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
    fontSize: theme.fontSize.base,
    color: 'var(--textColor-body)',
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    lineHeight: theme.lineHeight.normal,
  },
  '.C9Y-Text-detail': {
    fontSize: '0.875rem',
    color: 'var(--textColor-body)',
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.normal,
    lineHeight: '1.125rem',
  },
  '.C9Y-Text-overline': {
    fontSize: '0.75rem',
    fontFamily: theme.fontFamily.body,
    color: theme.textColor.muted,
    textTransform: 'uppercase',
    lineHeight: 1,
  },
}
