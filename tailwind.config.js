'use strict'

const { borderPlugin } = require('componentry')
const plugin = require('tailwindcss/plugin')
const { theme } = require('./src/theme/theme')

theme.extend = {}
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
  plugins: [plugin(borderPlugin)],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'sr-only',

    // background/text colors
    { pattern: /bg-primary-.*/ },
    { pattern: /text-(heading|body|muted|link|heart)/ },
  ],
}
