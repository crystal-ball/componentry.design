import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BackgroundsScreen from './Screens/BackgroundsScreen'
import BordersScreen from './Screens/BordersScreen'
import TypographyScreen from './Screens/TypographyScreen'

export default function StylesScreen() {
  return (
    <>
      <Switch>
        <Route path='/styles/backgrounds' component={BackgroundsScreen} />
        <Route path='/styles/borders' component={BordersScreen} />
        <Route path='/styles/typography' component={TypographyScreen} />
      </Switch>
    </>
  )
}
