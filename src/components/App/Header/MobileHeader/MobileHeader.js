import React from 'react'
import { useLocation } from 'react-router-dom'
import { Active, Anchor, Block, Drawer, Flex, Icon, Text } from 'componentry'

import { routes } from '../../routes'

import classes from './mobile-header.scss'

export default function Header() {
  const location = useLocation()
  const renderLandingLink = location.pathname !== '/'

  return (
    <Flex
      borderBottom
      as='nav'
      className={classes.navContainer}
      backgroundColor='ultra'
      justify='between'
      align='center'
      borderColor='ultra'
      py='sm'
      px='md'
    >
      <div className={classes.menuOffset}>&nbsp;</div>
      {renderLandingLink && (
        <Text fontColor='primary' className='line-height-1 text-shadow-display'>
          componentry
        </Text>
      )}
      <Active clickEvents>
        {({ deactivate }) => (
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          <>
            <Active.Trigger className={classes.action}>
              <Icon id='menu' className='h4' />
            </Active.Trigger>

            <Active.Content className={classes.contentContainer}>
              <Block p='md'>
                {/* Home */}
                <div>
                  <Anchor to='/' fontSize='lg' onClick={deactivate}>
                    Home
                  </Anchor>
                </div>

                {/* Setup */}
                <div>
                  <Anchor to='/setup' fontSize='lg' onClick={deactivate}>
                    Setup
                  </Anchor>
                </div>

                {/* Design system */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Design System</Drawer.Trigger>
                  <Drawer.Content pl='md'>
                    {routes.design.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Anchor} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>

                {/* Components */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Components</Drawer.Trigger>
                  <Drawer.Content pl='md'>
                    {routes.components.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Anchor} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>

                {/* Principles */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Principles</Drawer.Trigger>
                  <Drawer.Content pl='md'>
                    {routes.principles.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Anchor} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>
              </Block>

              <Flex
                justify='center'
                align='center'
                py='sm'
                px='md'
                backgroundColor='mito'
              >
                <Anchor as='a' href='https://github.com/crystal-ball/componentry' mx='sm'>
                  <Icon variant='feature' id='github' width={32} height={32} />
                </Anchor>
              </Flex>
            </Active.Content>
          </>
        )}
      </Active>
    </Flex>
  )
}
