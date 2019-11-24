import React from 'react'
import { Block, Heading } from 'componentry'

export default function DesignSystemScreen() {
  return (
    <div className='screen-container'>
      <Heading as='h2'>Design system notes</Heading>

      <ul>
        <li>SASS variable customization</li>
        <li>Dynamic theming</li>
        <li>Responsive sizes</li>
      </ul>
      <Block width={100} height={100} className='bg-info' />
    </div>
  )
}

// # Componentry Color System

// Componentry manages colors in a more flexible way than other libraries. Colors start
// with a base set of theme colors (primary, success, etc.) and then individual theme
// domains layer specific colors on top of those.

// eg Borders: Include the theme-colors and add border-colors.

// This allows creating more semantic variables for colors and more options.

// Componentry impacts:

// - Should add a `default` color to each domain's map-set, use that for other
//   variables, eg for modal borders use `map-get($border-colors, $default)`
// - Try to name each domain set: `<domain>-colors`
