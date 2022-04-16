'use strict'

const { borderPlugin } = require('componentry')
const plugin = require('tailwindcss/plugin')
const { theme } = require('./src/theme/theme')

const { width, height, ...themeOverrides } = theme

const tailwindTheme = {
  ...themeOverrides,
  extend: {
    height,
    width,
    gridTemplateColumns: {
      instructions: 'minmax(200px, 1fr) minmax(200px, 2fr)',
      classesTable: '1fr 3fr',
      propsTable: '1fr 2.5fr',
    },
  },
}

module.exports = {
  content: [
    './node_modules/componentry/types/utils/tailwind-safelist.d.ts',
    './src/**/*.{ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },

  plugins: [plugin(borderPlugin)],
  theme: tailwindTheme,
  safelist: [
    'sr-only',

    // width
    { pattern: /w-([\d]+|px)/ },

    // borders
    { pattern: /border(-[trbl])?-(nav|container)/ },

    // background/text colors
    { pattern: /bg-primary-.*/ },
    { pattern: /text-(heading|body|muted|link|heart)/ },
  ],
}
