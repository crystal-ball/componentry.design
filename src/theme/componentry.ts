/* eslint-disable @typescript-eslint/no-empty-interface */
import { configureIconElementsMap } from 'componentry'
import { Github } from './icons/Github'
import { Moon } from './icons/Moon'
import { Settings } from './icons/Settings'
import { Sun } from './icons/Sun'
import { theme, themeOverrides } from './theme'

const iconElementsMap = {
  github: Github,
  moon: Moon,
  settings: Settings,
  sun: Sun,
} as const
configureIconElementsMap(iconElementsMap)

const textElementMap = {
  title: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'h4',
  lead: 'p',
  body: 'p',
  detail: 'p',
  overline: 'div',
} as const

export const config = {
  theme,
  defaultProps: {
    Text: {
      textElementMap,
    },
  },
}

declare module 'componentry/types/theme/theme' {
  type CustomTheme = typeof themeOverrides

  export interface ThemeOverrides extends CustomTheme {}
}

declare module 'componentry/types/components/Alert/Alert' {
  interface AlertPropsOverrides {
    color?: 'primary' | 'success' | 'warning' | 'critical' | 'highlight'
  }
}

declare module 'componentry/types/components/Button/Button' {
  interface ButtonPropsOverrides {
    variant?: 'filled' | 'outlined' | 'docs'
    size?: 'small' | 'large' | 'docsLarge'
  }
}

declare module 'componentry/types/components/Icon/Icon' {
  interface IconPropsOverrides {
    id: keyof typeof iconElementsMap
  }
}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant?: keyof typeof textElementMap
  }
}
