import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import { routes } from '@/components/App/routes'
import ButtonScreen from './Button/Button'
// import Active from './screens/active.mdx'
// import Alert from './screens/alert.mdx'
import Anchor from './screens/anchor.mdx'
// import Badge from './screens/badge.mdx'
import BlockScreen from './Block/Block'
// import Card from './screens/card.mdx'
// import Close from './screens/close.mdx'
// import Drawer from './screens/drawer.mdx'
// import Dropdown from './screens/dropdown.mdx'
import FlexScreen from './Flex/Flex'
// import FormGroup from './screens/form-group.mdx'
import IconScreen from './Icon/Icon'
// import Input from './screens/input.mdx'
// import List from './screens/list.mdx'
import Media from './screens/media.mdx'
// import Modal from './screens/modal.mdx'
// import Nav from './screens/nav.mdx'
// import Popover from './screens/popover.mdx'
// import Tabs from './screens/tabs.mdx'
import TextScreen from './Text/Text'
import ThemeScreen from './Theme/Theme'
// import Tooltip from './screens/tooltip.mdx'

const screens = {
  // Active,
  // Alert,
  Anchor,
  // Badge,
  Block: BlockScreen,
  Button: ButtonScreen,
  // Card,
  // Close,
  // Drawer,
  // Dropdown,
  Flex: FlexScreen,
  // FormGroup,
  Icon: IconScreen,
  // Input,
  // List,
  Media,
  // Modal,
  // Nav,
  // Popover,
  // Tabs,
  Text: TextScreen,
  Theme: ThemeScreen,
  // Tooltip,
}

export default function ComponentsScreen() {
  return (
    <ScreenContainer>
      <Switch>
        {routes.components.map(({ name, path }) => (
          <Route key={path} path={path} component={screens[name]} />
        ))}
      </Switch>
    </ScreenContainer>
  )
}
