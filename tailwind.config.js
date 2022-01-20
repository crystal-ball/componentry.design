'use strict'

const theme = require('./src/theme/theme')

module.exports = {
  theme,
  content: [
    './node_modules/componentry/types/utils/tailwind-classes.d.ts',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [],
  safelist: [
    // margin, padding, gap
    { pattern: /m[trblxy]?-[\d.]+/ },
    { pattern: /p[trblxy]?-[\d.]+/ },
    { pattern: /gap(-[xy])?-[\d.]+/ },
  ],
}
