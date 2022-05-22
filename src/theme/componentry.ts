/* eslint-disable @typescript-eslint/no-empty-interface */
import { configureIconElementsMap, configureTextElementsMap } from 'componentry'
import { Github } from './icons/Github'
import { Hologram } from './icons/Hologram'
import { Menu } from './icons/Menu'
import { themeOverrides } from './theme'

export {}

const iconElementsMap = {
  github: Github,
  menu: Menu,
  hologram: Hologram,
} as const

const textElementsMap = {
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

export function configureComponentry() {
  configureIconElementsMap(iconElementsMap)

  configureTextElementsMap(textElementsMap)
}

declare module 'componentry/types/theme/theme' {
  type CustomTheme = typeof themeOverrides

  export interface ThemeOverrides extends CustomTheme {}
}

declare module 'componentry/types/components/Alert/Alert' {
  interface AlertPropsOverrides {
    color: 'primary' | 'success' | 'warning' | 'critical' | 'highlight'
  }
}

declare module 'componentry/types/components/Button/Button' {
  interface ButtonPropsOverrides {
    variant: 'filled' | 'outlined' | 'docs'
    size: 'small' | 'large' | 'docsLarge'
    startIcon: keyof typeof iconElementsMap
    endIcon: keyof typeof iconElementsMap
  }
}

declare module 'componentry/types/components/Icon/Icon' {
  interface IconPropsOverrides {
    id: keyof typeof iconElementsMap
  }
}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant: keyof typeof textElementsMap
  }
}
