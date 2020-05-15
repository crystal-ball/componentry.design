import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from '@/components/App/routes'
import { ScreenContainer } from '@/components/universal'
import PaletteScreen from './Palette/Palette.mdx'
import SpacingScreen from './Spacing/Spacing.mdx'
import TypographyScreen from './Typography/Typography.mdx'

const screens = {
  Palette: PaletteScreen,
  Spacing: SpacingScreen,
  Typography: TypographyScreen,
}

export default function DesignSystemScreen() {
  return (
    <ScreenContainer>
      <Switch>
        {routes.designSystem.map(({ name, path }) => (
          <Route key={path} path={path} component={screens[name]} />
        ))}
      </Switch>
    </ScreenContainer>
  )
}
