import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import { routes } from '@/components/App/routes'
import CustomizingScreen from './Customizing/Customizing.mdx'
import OverviewScreen from './Overview/Overview.mdx'
import SetupScreen from './Setup/Setup.mdx'

const screens = {
  Overview: OverviewScreen,
  Setup: SetupScreen,
  Customizing: CustomizingScreen,
}

export default function GettingStartedScreens() {
  return (
    <ScreenContainer>
      <Switch>
        {routes.gettingStarted.map(({ name, path }) => (
          <Route key={path} path={path} component={screens[name]} />
        ))}
      </Switch>
    </ScreenContainer>
  )
}
