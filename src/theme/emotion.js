import React from 'react'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

// Emotion styles theme is accessible using emotion-theming
export const emotionTheme = {
  typography: {
    fontFamilySansSerif: '"Play", serif',
    fontFamilyMonospace: '"Fira Code", monospace',
    fontFamilyDisplay: '"Major Mono Display", monospace',
  },
  themeColors: {
    primary: '#f52277',
  },
  backgroundColors: {
    ultra: '#100f1a',
    background: '#12111f',
    overlay: 'rgba(17, 15, 22, 0.75)',
  },
  borderColors: {
    mito: '#2c3258',
    ultra: '#681854',
  },
  typographyColors: {
    anchor: '#a6ffdd',
    heading: '#baf0ff',
    lead: '#b3cdd4',
    muted: '#8e999c',
    radvender: '#bf9afc',
  },
}

/**
 * Emotion ThemeProvider wrapper that can be used with Storybook stories or
 * unit tests.
 */
export const emotionWrapper = render => (
  <EmotionTheme theme={emotionTheme}>{render}</EmotionTheme>
)
