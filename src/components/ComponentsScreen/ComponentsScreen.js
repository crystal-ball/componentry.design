import React from 'react'
import { Route } from 'react-router-dom'

import FlexScreen from './Screens/FlexScreen'
import AnchorScreen from './Screens/AnchorScreen'

export default function ComponentsScreen() {
  return (
    <>
      <Route to='/components/anchor' component={AnchorScreen} />
      <Route to='/components/flex' component={FlexScreen} />
    </>
  )
}
