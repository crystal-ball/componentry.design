import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Flex } from 'componentry'

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

export default function App() {
  return (
    <>
      {/* App container div sets flexbox layout for screens + sticky footers */}
      <Flex className='min-100vh radical-theme' direction='column'>
        <Header />
        <Switch>
          <Route path='/' exact component={LandingScreen} />
          <Route path='/setup' component={SetupScreen} />
          <Route path='/styles' component={StylesScreen} />
          <Route path='/components' component={ComponentsScreen} />
          <Route path='/dev-testing' exact component={DevScreen} />
          <Route component={FourOhFourScreen} />
        </Switch>
      </Flex>
      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
    </>
  )
}
