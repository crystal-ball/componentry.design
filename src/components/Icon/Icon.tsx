import clsx, { type ClassValue } from 'clsx'
import { type ComponentPropsWithoutRef } from 'react'
import { type UtilityProps, utilityClasses } from 'componentry'

import { Github } from './Github'
import { Menu } from './Menu'
import { Hologram } from './Hologram'

const icons = {
  github: Github,
  menu: Menu,
  hologram: Hologram,
}

export const Icon = ({ className, id, width, height, ...rest }: IconProps) => {
  const { passThroughProps, utilityCx } = utilityClasses(rest)

  const IconInstance = icons[id]
  return (
    <IconInstance
      className={clsx(className, utilityCx)}
      width={width}
      height={height}
      {...passThroughProps}
    />
  )
}

type IconProps = {
  className?: ClassValue
  id: keyof typeof icons
  width?: number
  height?: number
} & UtilityProps &
  ComponentPropsWithoutRef<'svg'>
