/* eslint-disable */

'use strict'

// --- Componentry.design application theme
// --------------------------------------------------------

const gray = {
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
}

const fontFamily = {
  body: '"Nunito Sans", sans-serif',
  heading: '"Libre Baskerville", serif',
  monospace: '"Fira Code", monospace',
}

const fontWeight = {
  heading: 600,
  normal: 400,
  bold: 600,
}

module.exports = {
  extend: {},
  screens: {
    lg: '1200px',
  },
  colors: {
    gray,
    primary: {
      100: '#BDBDDD',
      300: '#686AAF',
      500: '#2B2E90',
      700: '#1D1E7C',
      900: '#01015C',
    },
    info: {},
    success: {},
    warning: {},
    error: {},
    text: {
      body: '#c7e3ee',
      heart: '#fcc4dd',
    },
  },
  spacing: {
    0: 0,
    0.5: '0.25rem', // 4px
    1: '0.5rem', // 8px
    1.5: '0.75rem', // 12px
    2: '1rem', // 16px
    3: '1.5rem', // 24px
    4: '2rem', // 32px
    6: '3rem', // 48px
    8: '4rem', // 64px
    10: '5rem', // 80px
    16: '8rem', // 128px
  },
  fontFamily,
  fontWeight,
  letterSpacing: {
    lead: '0.5px',
  },
  lineHeight: {
    none: 1,
    body: 1.375,
  },
}
