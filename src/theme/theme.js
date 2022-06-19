// @ts-check

'use strict'

const { createTheme } = require('componentry')

// --- Componentry.design application theme
// --------------------------------------------------------

const gray = /** @type {const} */ ({
  // Tailwind Gray - https://tailwindcss.com/docs/customizing-colors
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
})

const primary = /** @type {const} */ ({
  100: '#BDBDDD',
  200: '#8687C0',
  300: '#686AAF',
  400: '#3F42AE',
  500: '#2A2D99',
  600: '#232688',
  700: '#171872',
  800: '#0B0C62',
  900: '#02024D',
})

const themeOverrides = /** @type {const} */ ({
  screens: {
    lg: '1200px',
  },

  // --------------------------------------------------------
  // COLORS
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    background: '#fff',
    inverse: '#eff',
    gray,
    primary,
    info: {
      100: '#BBDEFB',
      300: '#64B5F6',
      500: '#2196F3',
      700: '#1976D2',
      900: '#0D47A1',
    },
    success: {
      100: '#DCEDC8',
      300: '#AED581',
      500: '#8BC34A',
      700: '#689F38',
      900: '#33691E',
    },
    warning: {
      100: '#FFECB3',
      300: '#FFD54F',
      500: '#FFC107',
      700: '#FFA000',
      900: '#FF6F00',
    },
    error: {
      100: '#FFCCBC',
      300: '#FF8A65',
      500: '#FF5722',
      700: '#E64A19',
      900: '#BF360C',
    },
  },

  backgroundColor: {
    background: '#fff',
    // Primary colors are used for layout docs
    primary,
  },
  textColor: {
    heading: gray[900],
    body: gray[700],
    muted: gray[500],
    link: primary[500],
    heart: '#fcc4dd',
  },

  // --------------------------------------------------------
  // TYPOGRAPHY

  fontFamily: {
    body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    display:
      '"Racing Sans One", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: '"Fira Code", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    base: '1rem', // 16px
    sm: '0.75rem', // 12px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    button: '0.875rem', // 14px
    code: '0.875rem', // 14px
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  letterSpacing: {
    lead: '0.5px',
  },
  lineHeight: {
    none: 1,
    normal: 1.375,
  },

  // --------------------------------------------------------
  // BORDERS
  border: {
    DEFAULT: `1px solid ${gray[200]}`,
    nav: `1px solid ${gray[200]}`,
    container: `1px solid ${gray[300]}`,
  },

  boxShadow: {
    nav: `0px -3px 6px #171872`,
  },
})

const theme = createTheme(themeOverrides)

module.exports = { theme, themeOverrides }
