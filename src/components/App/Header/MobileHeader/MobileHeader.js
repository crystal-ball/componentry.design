import React from 'react'
import { useLocation } from 'react-router-dom'
import { Active, Anchor, Block, Drawer, Flex, Heading, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'
import { routes } from '../../routes'

const navContainerStyles = ({ borderColors }) => css`
  position: sticky;
  top: 0;
  box-shadow: 0 0 10px ${borderColors.ultra};
`

const contentContainerStyles = ({ borderColors }) => css`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background: rgba(36, 37, 96, 0.9);
  border-left: 5px solid ${borderColors.ultra};
  z-index: 1;
`

const menuOffsetStyles = css`
  display: block;
  width: 20px;
  height: 25px;
`

export default function Header() {
  const location = useLocation()
  const renderLandingLink = location.pathname !== '/'

  return (
    <Flex
      borderBottom
      as='nav'
      background='ultra'
      justify='between'
      align='center'
      borderColor='ultra'
      py='sm'
      px='base'
      css={navContainerStyles}
    >
      <div css={menuOffsetStyles}>&nbsp;</div>
      {renderLandingLink && (
        <Heading
          variant='heading-4'
          fontColor='primary'
          className='line-height-1 raddow-1'
        >
          componentry
        </Heading>
      )}
      <Active clickEvents>
        {({ deactivate }) => (
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          <>
            <Active.Trigger>
              <Icon id='menu' className='h4' />
            </Active.Trigger>

            <Active.Content css={contentContainerStyles}>
              <Block p='base'>
                <div onClick={deactivate}>
                  <Link to='/' fontSize='lg'>
                    Home
                  </Link>
                </div>

                {/* Setup */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Setup</Drawer.Trigger>
                  <Drawer.Content pl='base'>
                    {routes.setup.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Link} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>

                {/* Design system */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Design System</Drawer.Trigger>
                  <Drawer.Content pl='base'>
                    {routes.design.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Link} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>

                {/* Components */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Components</Drawer.Trigger>
                  <Drawer.Content pl='base'>
                    {routes.components.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Link} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>

                {/* Principles */}
                <Drawer onDeactivate={deactivate}>
                  <Drawer.Trigger fontSize='lg'>Principles</Drawer.Trigger>
                  <Drawer.Content pl='base'>
                    {routes.principles.map(({ name, path }) => (
                      <Drawer.Trigger key={path} as={Link} to={path}>
                        {name}
                      </Drawer.Trigger>
                    ))}
                  </Drawer.Content>
                </Drawer>
              </Block>

              <Flex justify='center' align='center' py='sm' px='base' background='mito'>
                <Anchor
                  href='https://github.com/crystal-ball/componentry'
                  mx='sm'
                  fontSize='xl'
                >
                  <Icon id='github' className='d-block' font={false} />
                </Anchor>
              </Flex>
            </Active.Content>
          </>
        )}
      </Active>
    </Flex>
  )
}
