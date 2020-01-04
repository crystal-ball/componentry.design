import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import AccessibilityScreen from './screens/accessibility.mdx'
import APIDesignScreen from './screens/api-design.mdx'
import LibraryPrinciplesScreen from './screens/library-principles.mdx'

export default function PrinciplesScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route
          path='/principles/library-principles'
          component={LibraryPrinciplesScreen}
        />
        <Route path='/principles/api-design' component={APIDesignScreen} />
        <Route path='/principles/accessibility' component={AccessibilityScreen} />
      </Switch>
    </ScreenContainer>
  )
}
