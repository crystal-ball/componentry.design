/* eslint-disable */
const spacing = (space) => `${space * 0.5}rem`

module.exports = {
  // --- SPACING
  spacing: {
    0: spacing(0),
    xs: spacing(0.5),
    sm: spacing(1),
    md: spacing(2),
    lg: spacing(3),
    xl: spacing(6),
  },

  // --- PALETTE
  palette: {
    primary: {
      '100': '#FEE9F1',
      '300': '#FBA7C9',
      '500': '#f52277',
      '700': '#931447',
      '900': '#4A0A24',
    },
    secondary: {
      '100': '#F6FFFD',
      '300': '#DCFFF9',
      '500': '#A8FFEF',
      '700': '#65998F',
      '900': '#324D48',
    },

    backgrounds: {
      body: '#12111f',
      ultra: '#100f1a',
      overlay: 'rgba(17, 15, 22, 0.75)',
      mito: '#242560',
    },
    borders: {
      mito: '#2c3258',
      ultra: '#681854',
    },
    shadows: {
      ultra: '#f52277',
    },
    typography: {
      body: '#c7e3ee',
      anchor: '#A8FFEF',
      heading: '#baf0ff',
      muted: '#75B7BB',
      primary: '#f52277',
      radvender: '#bf9afc',
    },
  },

  // --- TYPOGRAPHY
  typography: {
    'font-families': {
      primary: '"IBM Plex Sans", serif',
      secondary: '"Aldrich", monospace',
      monospace: '"Fira Code", monospace',
    },
    'font-weights': {
      heading: 300,
      subtitle: 700,
    },
    'letter-spacings': {
      heading: '0.05em',
    },
    'line-heights': {
      body: 1.555556,
    },
    'shadows': {
      display: '#f52277 1px 0px 15px',
      subtitle: '#bf9afc 2px 2px 8px',
    },
  },

  // --- Borders
  borders: {},

  // --- SHADOWS
  shadows: {
    primary: '0 0 10px #f52277',
  },
}

// 🙌 Color shades from https://javisperez.github.io/tailwindcolorshades
