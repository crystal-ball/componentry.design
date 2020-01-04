import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import ActiveScreen from './screens/active.mdx'
import AnchorScreen from './screens/anchor.mdx'
import BlockScreen from './screens/block.mdx'
import ButtonScreen from './screens/button.mdx'
import FlexScreen from './screens/flex.mdx'
import HeaderScreen from './screens/heading.mdx'

export default function ComponentsScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/components/active' component={ActiveScreen} />
        <Route path='/components/anchor' component={AnchorScreen} />
        <Route path='/components/block' component={BlockScreen} />
        <Route path='/components/button' component={ButtonScreen} />
        <Route path='/components/flex' component={FlexScreen} />
        <Route path='/components/heading' component={HeaderScreen} />
      </Switch>
    </ScreenContainer>
  )
}
