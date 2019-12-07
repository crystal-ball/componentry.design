import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import Components from './Components.mdx'
import ActiveScreen from './Screens/ActiveScreen.mdx'
import AnchorScreen from './Screens/AnchorScreen.mdx'
import ButtonScreen from './Screens/ButtonScreen.mdx'
import FlexScreen from './Screens/FlexScreen.mdx'
import HeaderScreen from './Screens/HeadingScreen.mdx'

import PropsScreen from './APIScreens/PropsScreen.mdx'
import VariantScreen from './APIScreens/VariantScreen.mdx'

export default function ComponentsScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/components/active' component={ActiveScreen} />
        <Route path='/components/anchor' component={AnchorScreen} />
        <Route path='/components/button' component={ButtonScreen} />
        <Route path='/components/flex' component={FlexScreen} />
        <Route path='/components/heading' component={HeaderScreen} />

        <Route path='/components/props' component={PropsScreen} />
        <Route path='/components/variants' component={VariantScreen} />

        <Route path='/components' component={Components} />
      </Switch>
    </ScreenContainer>
  )
}
