import React from 'react'
import { Block } from 'componentry'

export default function ThemingScreen() {
  return (
    <div className='bg-background'>
      Theming notes - _variables.scss - colors system - fonts system
      <Block width={100} height={100} className='bg-info' />
    </div>
  )
}

/**
 * Dynamic themes:
 *
 * Use the $enable-themes flag and the $themes map to generate themes.
 *
 * ℹ️ This solution will hopefully one day be replaced with CSS native variables
 * and color functions!
 */
