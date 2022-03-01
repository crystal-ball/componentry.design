'use strict'

const theme = require('./src/theme/theme')

theme.extend.gridTemplateColumns = {
  instructions: 'minmax(200px, 1fr) minmax(200px, 2fr)',
  classesTable: '1fr 3fr',
  propsTable: '1fr 2.5fr',
}

module.exports = {
  theme,
  content: [
    './node_modules/componentry/types/utils/tailwind-safelist.d.ts',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'sr-only',

    // color
    { pattern: /bg-primary-.*/ },

    // spacing
    { pattern: /m[trblxy]?-.*/ },
    { pattern: /p[trblxy]?-.*/ },
    { pattern: /gap(-[xy])?-.*/ },

    // typography
    { pattern: /text-(heading|body|muted|link|heart)/ },
    { pattern: /font-(body|monospace)/ },
  ],
}
