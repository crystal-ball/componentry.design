/* eslint-disable @typescript-eslint/no-empty-interface */
import { configureIconElementsMap, configureTextElementsMap } from 'componentry'
import { Github } from './icons/Github'
import { Hologram } from './icons/Hologram'
import { Menu } from './icons/Menu'
import { themeOverrides } from './theme'

export {}

export function configureComponentry() {
  configureIconElementsMap({
    github: Github,
    menu: Menu,
    hologram: Hologram,
  })

  configureTextElementsMap({
    title: 'h1',
    subtitle: 'h4',
    detail: 'p',
    overline: 'div',
  })
}

declare module 'componentry/types/theme/theme' {
  type CustomTheme = typeof themeOverrides

  export interface ThemeOverrides extends CustomTheme {}
}

declare module 'componentry/types/utils/utility-classes' {
  type Border = 'nav' | 'container'

  interface UtilityPropsOverrides {
    backgroundColor: 'primary-100' | 'primary-200'
    border: Border
    borderTop: Border
    borderRight: Border
    borderBottom: Border
    borderLeft: Border
  }
}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant:
      | 'title'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'subtitle'
      | 'lead'
      | 'body'
      | 'detail'
      | 'overline'
  }
}

declare module 'componentry/types/components/Button/Button' {
  interface ButtonPropsOverrides {
    size: 'small' | 'large'
  }
}