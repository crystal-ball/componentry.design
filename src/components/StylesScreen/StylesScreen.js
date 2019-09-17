import React from 'react'
import { Route } from 'react-router-dom'

import BackgroundsScreen from './Screens/BackgroundsScreen'
import BordersScreen from './Screens/BordersScreen'
import TypographyScreen from './Screens/TypographyScreen'

export default function StylesScreen() {
  return (
    <>
      <Route to='/styles/backgrounds' component={BackgroundsScreen} />
      <Route to='/styles/borders' component={BordersScreen} />
      <Route to='/styles/typography' component={TypographyScreen} />
    </>
  )
}
