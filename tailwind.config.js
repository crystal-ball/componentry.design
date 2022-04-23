'use strict'

const { borderPlugin } = require('componentry')
const plugin = require('tailwindcss/plugin')
const { theme } = require('./src/theme/theme')

const { width, height, ...themeOverrides } = theme

const fontSizes = Object.keys(theme.fontSize)
const textColors = Object.keys(theme.textColor)

const textRegex = new RegExp(`text-(${[...fontSizes, ...textColors].join('|')})`)

const tailwindTheme = {
  ...themeOverrides,
  flexGrow: { 0: 0, DEFAULT: 1 }, // bugfix
  flexShrink: { 0: 0, DEFAULT: 1 }, // bugfix
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
    // text color && font-size
    { pattern: textRegex },

    // width
    { pattern: /w-([\d]+|px)/ },

    // borders
    { pattern: /border(-[trbl])?-(nav|container)/ },

    { pattern: /shadow-(nav)/ },

    // background/text colors
    { pattern: /bg-(background|primary-.*)/ },
  ],
}
