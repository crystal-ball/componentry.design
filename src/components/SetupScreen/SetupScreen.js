import React from 'react'
import { Route } from 'react-router-dom'
import DesignSystemScreen from './Screens/DesignSystemScreen'

export default function SetupScreen() {
  return <Route to='/setup/design-system' component={DesignSystemScreen} />
}

// Install
// SASS variables
// Theme provider
// Outline handlers
