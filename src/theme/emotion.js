import React from 'react'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

// Emotion styles theme is accessible using emotion-theming
export const emotionTheme = {
  themeColors: {},
  grayColors: {
    '100': '#e4e0f0',
    '600': '#48676a',
  },
  borderColors: {
    mito: '#2c3258',
  },
  typographyColors: {
    header: '#ffc4e2',
  },
}

/**
 * Emotion ThemeProvider wrapper that can be used with Storybook stories or
 * unit tests.
 */
export const emotionWrapper = render => (
  <EmotionTheme theme={emotionTheme}>{render}</EmotionTheme>
)
