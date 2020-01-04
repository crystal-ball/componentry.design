import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import ColorsScreen from './screens/colors.mdx'
import SpacingScreen from './screens/spacing.mdx'
import TypographyScreen from './screens/typography.mdx'

export default function DesignSystemScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/design-system/colors' component={ColorsScreen} />
        <Route path='/design-system/spacing' component={SpacingScreen} />
        <Route path='/design-system/typography' component={TypographyScreen} />
      </Switch>
    </ScreenContainer>
  )
}
