'use strict'

const { borderPlugin, tailwindSafelist } = require('componentry')
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
      classesTable: '2fr 3fr',
      propsTable: '1fr 2.5fr',
    },
  },
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
  },

  plugins: [plugin(borderPlugin)],
  theme: tailwindTheme,
  safelist: tailwindSafelist,
}
