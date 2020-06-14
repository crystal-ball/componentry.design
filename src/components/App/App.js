import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import { ScrollToTop } from '@/components/universal'
import LandingScreen from '../LandingScreen/LandingScreen'
import GettingStartedScreen from '../GettingStartedScreen/GettingStartedScreen'
import DesignSystemScreen from '../DesignSystemScreen/DesignSystemScreen'
import ComponentsScreen from '../ComponentsScreen/ComponentsScreen'
import PrinciplesScreen from '../PrinciplesScreen/PrinciplesScreen'
import FourOhFourScreen from '../FourOhFourScreen/FourOhFourScreen'
import Header from './Header/Header'

function App() {
  return (
    <>
      {/* App container div sets flexbox layout for screens + sticky footers */}
      <div className='d-flex flex-column w-100 min-100vh'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LandingScreen />
          </Route>
          <Route path='/getting-started'>
            <GettingStartedScreen />
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
