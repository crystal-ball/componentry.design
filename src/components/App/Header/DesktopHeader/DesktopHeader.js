import React from 'react'
import { useLocation } from 'react-router-dom'
import { Anchor, Block, Dropdown, Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'
import { routes } from '../../routes'

const navContainerStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
`

const iconAnchorStyles = css`
  font-size: 24px;
`

export default function Header() {
  const location = useLocation()
  const renderLandingLink = location.pathname !== '/'

  return (
    <Block className='bg-ultra'>
      <Flex
        borderBottom
        as='nav'
        justify='between'
        align='center'
        borderColor='ultra'
        borderWidth='3'
        className='px-4 py-3'
        css={navContainerStyles}
      >
        {renderLandingLink ? (
          <Link to='/' fontColor='primary' className='h4 line-height-1'>
            Componentry
          </Link>
        ) : (
          <div />
        )}

        <Flex align='center'>
          {/* Setup */}
          <Dropdown>
            <Dropdown.Trigger mx='sm'>Setup</Dropdown.Trigger>
            <Dropdown.Content>
              {routes.setup.map(({ name, path }) => (
                <Dropdown.Item key={path} as={Link} to={path}>
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>

          {/* Design System */}
          <Dropdown>
            <Dropdown.Trigger mx='sm'>Design System</Dropdown.Trigger>
            <Dropdown.Content>
              {routes.design.map(({ name, path }) => (
                <Dropdown.Item key={path} as={Link} to={path}>
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>

          {/* Components */}
          <Dropdown>
            <Dropdown.Trigger mx='sm'>Components</Dropdown.Trigger>
            <Dropdown.Content>
              {routes.components.map(({ name, path }) => (
                <Dropdown.Item key={path} as={Link} to={path}>
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>

          {/* Principles */}
          <Dropdown>
            <Dropdown.Trigger mx='sm'>Principles</Dropdown.Trigger>
            <Dropdown.Content>
              {routes.principles.map(({ name, path }) => (
                <Dropdown.Item key={path} as={Link} to={path}>
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>

          <Anchor
            href='https://github.com/crystal-ball/componentry'
            mx='sm'
            css={iconAnchorStyles}
          >
            <Icon id='github' className='d-block' font={false} />
          </Anchor>
        </Flex>
      </Flex>
    </Block>
  )
}
