import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'

// Screens
import LandingScreen from '../LandingScreen/LandingScreen'
import SetupScreen from '../SetupScreen/SetupScreen'
import DesignSystemScreen from '../DesignSystemScreen/DesignSystemScreen'
import ComponentsScreen from '../ComponentsScreen/ComponentsScreen'
import PrinciplesScreen from '../PrinciplesScreen/PrinciplesScreen'
import FourOhFourScreen from '../FourOhFourScreen/FourOhFourScreen'

// ℹ️ Screens overview
// 1. Landing - Library overview/highlights
// 2. Setup - Install, ThemeProvider, outline handler
// 3. Design System - SASS customization, Colors, Typography, Spacing
// 4. Components - Button, Card, Drawer, etc.
// 5. Principles - API design, component composition

function App() {
  return (
    <>
      {/* App container div sets flexbox layout for screens + sticky footers */}
      <div className='app-container radical-theme'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LandingScreen />
          </Route>
          <Route path='/setup'>
            <SetupScreen />
          </Route>
          <Route path='/design-system'>
            <DesignSystemScreen />
          </Route>
          <Route path='/components'>
            <ComponentsScreen />
          </Route>
          <Route path='/principles'>
            <PrinciplesScreen />
          </Route>
          <Route>
            <FourOhFourScreen />
          </Route>
        </Switch>
      </div>

      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
    </>
  )
}

export default hot(App)
