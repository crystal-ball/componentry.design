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

const primary = {
  100: '#BDBDDD',
  200: '#8687C0',
  300: '#686AAF',
  400: '#3F42AE',
  500: '#2A2D99',
  600: '#232688',
  700: '#171872',
  800: '#0B0C62',
  900: '#02024D',
}

const fontFamily = {
  body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  display:
    '"Racing Sans One", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  monospace:
    '"Fira Code", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

const fontWeight = {
  normal: 400,
  bold: 700,
}

const fontSize = {
  base: '1rem', // 16px
  sm: '0.75rem', // 12px
  lg: '1.25rem', // 20px
  code: '0.875rem', // 14px
}

module.exports = {
  extend: {}, // Include for easy additions in tailwind.config.js
  screens: {
    lg: '1200px',
  },
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

    // Text colors
    heading: gray[900],
    body: gray[700],
    muted: gray[500],
    link: primary[500],
    heart: '#fcc4dd',

    // Border colors
    container: gray[300],
  },
  spacing: {
    0: 0,
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    3.5: '0.875rem', // 14px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    9: '2.25rem', // 36px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    36: '9rem', // 144px
    40: '10rem', // 160px
    44: '11rem', // 176px
    48: '12rem', // 192px
    52: '13rem', // 208px
    56: '14rem', // 224px
    60: '15rem', // 240px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    96: '24rem', // 384px
  },
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing: {
    lead: '0.5px',
  },
  lineHeight: {
    none: 1,
    normal: 1.375,
  },
}
