import React from 'react'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

// Emotion styles theme is accessible using emotion-theming
export const emotionTheme = {
  typography: {
    fontFamilySansSerif: '"Play", serif',
    fontFamilyMonospace: '"Fira Code", monospace',
    fontFamilyDisplay: '"Major Mono Display", monospace',
  },
  grayScale: {
    '100': '#e4e0f0',
    '600': '#48676a',
  },
  themeColors: {},
  backgroundColors: {
    ultra: '#110f16',
    background: '#1a1722',
    overlay: 'rgba(17, 15, 22, 0.75)',
  },
  borderColors: {
    mito: '#2c3258',
    ultra: '#681854',
  },
  fontColors: {
    anchor: '#5effbd',
    header: '#ffc4e2',
    muted: '#48676a',
    lead: '#48676a',
    component: '#bf9afc',
  },
}

/**
 * Emotion ThemeProvider wrapper that can be used with Storybook stories or
 * unit tests.
 */
export const emotionWrapper = render => (
  <EmotionTheme theme={emotionTheme}>{render}</EmotionTheme>
)
