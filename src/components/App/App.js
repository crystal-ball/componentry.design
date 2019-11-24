import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'
import Footer from './Footer/Footer'

// Screens
import LandingScreen from '../LandingScreen/LandingScreen'
import SetupScreen from '../SetupScreen/SetupScreen'
import DesignSystemScreen from '../DesignSystemScreen/DesignSystemScreen'
import ComponentsScreen from '../ComponentsScreen/ComponentsScreen'
import DevScreen from '../DevScreen/DevScreen'
import FourOhFourScreen from '../FourOhFourScreen/FourOhFourScreen'

// ℹ️ Routing heiararchy
// 1. Setup - Install, ThemeProvider, outline handler
// 2. Design System - Customizing, Colors, Typography, Spacing
// 3. Components - API principles, library props, etc.

// Getting Started
//  - Setup, Customize, API principles, component styles compatability, Guidelines, Style Props
//  (Principles and Guidelines are nice terms)
// Components
//  - All the components!

function App() {
  return (
    <>
      {/* App container div sets flexbox layout for screens + sticky footers */}
      <div className='app-container radical-theme'>
        <Header />
        <Switch>
          <Route path='/' exact>
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
          <Route path='/dev-testing'>
            <DevScreen />
          </Route>
          <Route>
            <FourOhFourScreen />
          </Route>
        </Switch>
        <Footer />
      </div>
      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
    </>
  )
}

export default hot(App)
