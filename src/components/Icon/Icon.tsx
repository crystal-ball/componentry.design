import { utilityClasses } from 'componentry'

import { Github } from './Github'
import { Menu } from './Menu'
import { Hologram } from './Hologram'

const icons = {
  github: Github,
  menu: Menu,
  hologram: Hologram,
}

export const Icon = ({ id, width, height, ...rest }: IconProps) => {
  const { passThroughProps /* utilityCx */ } = utilityClasses(rest)

  const IconInstance = icons[id]
  return <IconInstance width={width} height={height} {...passThroughProps} />
}

type IconProps = {
  id: keyof typeof icons
  width?: number
  height?: number
  mt?: number
  [prop: string]: unknown
}
