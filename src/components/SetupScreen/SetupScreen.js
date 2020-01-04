import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import GettingStarted from './screens/getting-started.mdx'
import ThemeCustomization from './screens/theme-customization.mdx'

export default function SetupScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/setup/getting-started' component={GettingStarted} />
        <Route path='/setup/theme-customization' component={ThemeCustomization} />
      </Switch>
    </ScreenContainer>
  )
}
