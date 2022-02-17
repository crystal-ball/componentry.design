'use strict'

const theme = require('./src/theme/theme')

theme.extend.gridTemplateColumns = {
  instructions: 'minmax(200px, 1fr) minmax(200px, 2fr)',
}

module.exports = {
  theme,
  content: [
    './node_modules/componentry/types/utils/tailwind-classes.d.ts',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'sr-only',
    // margin, padding, gap
    { pattern: /m[trblxy]?-.*/ },
    { pattern: /p[trblxy]?-.*/ },
    { pattern: /gap(-[xy])?-.*/ },

    { pattern: /text-(heading|body|muted|link|heart)/ },
    { pattern: /bg-primary-.*/ },
  ],
}
