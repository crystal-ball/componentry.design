import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import DesignSystem from './DesignSystem.mdx'
import ColorsScreen from './Screens/Colors.mdx'
import SpacingScreen from './Screens/Spacing.mdx'
import TypographyScreen from './Screens/Typography.mdx'

export default function DesignSystemScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/design-system/colors' component={ColorsScreen} />
        <Route path='/design-system/spacing' component={SpacingScreen} />
        <Route path='/design-system/typography' component={TypographyScreen} />

        <Route path='/design-system' component={DesignSystem} />
      </Switch>
    </ScreenContainer>
  )
}
