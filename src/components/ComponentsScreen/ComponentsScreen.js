import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import { routes } from '@/components/App/routes'
import ButtonScreen from './ButtonScreen/ButtonScreen'
// import Active from './screens/active.mdx'
// import Alert from './screens/alert.mdx'
import Anchor from './screens/anchor.mdx'
// import Badge from './screens/badge.mdx'
import Block from './screens/block.mdx'
// import Card from './screens/card.mdx'
// import Close from './screens/close.mdx'
// import Drawer from './screens/drawer.mdx'
// import Dropdown from './screens/dropdown.mdx'
import Flex from './screens/flex.mdx'
// import FormGroup from './screens/form-group.mdx'
import Icon from './screens/icon.mdx'
// import Input from './screens/input.mdx'
// import List from './screens/list.mdx'
import Media from './screens/media.mdx'
// import Modal from './screens/modal.mdx'
// import Nav from './screens/nav.mdx'
// import Popover from './screens/popover.mdx'
// import Tabs from './screens/tabs.mdx'
import Text from './screens/text.mdx'
import Theme from './screens/theme.mdx'
// import Tooltip from './screens/tooltip.mdx'

const screens = {
  // Active,
  // Alert,
  Anchor,
  // Badge,
  Block,
  Button: ButtonScreen,
  // Card,
  // Close,
  // Drawer,
  // Dropdown,
  Flex,
  // FormGroup,
  Icon,
  // Input,
  // List,
  Media,
  // Modal,
  // Nav,
  // Popover,
  // Tabs,
  Text,
  Theme,
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
