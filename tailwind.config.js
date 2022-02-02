'use strict'

const theme = require('./src/theme/theme')

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
    // margin, padding, gap
    { pattern: /m[trblxy]?-.*/ },
    { pattern: /p[trblxy]?-.*/ },
    { pattern: /gap(-[xy])?-.*/ },

    { pattern: /text-(heading|body|muted|link|heart)/ },
  ],
}
