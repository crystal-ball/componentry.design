import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Application
import { ScrollToTop } from '@/components/universal'
import Header from './Header/Header'

// Screens
import LandingScreen from '../LandingScreen/LandingScreen'
import SetupScreen from '../SetupScreen/SetupScreen'
import StylesScreen from '../StylesScreen/StylesScreen'
import ComponentsScreen from '../ComponentsScreen/ComponentsScreen'
import DevScreen from '../DevScreen/DevScreen'
import FourOhFourScreen from '../FourOhFourScreen/FourOhFourScreen'

// ℹ️ Routing heiararchy
// Getting Started
//  - Setup, Customize, API principles, component styles compatability, Guidelines, Style Props
//  (Principles and Guidelines are nice terms)
// Components
//  - All the components!

export default function App() {
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
          <Route path='/styles'>
            <StylesScreen />
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
      </div>
      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
    </>
  )
}
