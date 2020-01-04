import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import Principles from './Principles.mdx'
import PropsAPIScreen from './Screens/PropsAPI.mdx'
import VariantScreen from './Screens/Variant.mdx'

export default function PrinciplesScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route path='/principles/props' component={PropsAPIScreen} />
        <Route path='/principles/variants' component={VariantScreen} />
        <Route path='/principles' component={Principles} />
      </Switch>
    </ScreenContainer>
  )
}
