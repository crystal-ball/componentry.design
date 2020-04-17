import React from 'react'
import { useLocation } from 'react-router-dom'
import { css } from '@emotion/core'
import { Anchor, Block, Dropdown, Flex, Icon } from 'componentry'

import { Link } from '@/components/universal'
import { routes } from '@/components/App/routes'

const navContainerStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
`

const navButtonStyles = (theme) => css`
  font-family: ${theme.typography.fontFamilySecondary};
  color: ${theme.themeColors.primary};
  text-shadow: ${theme.themeColors.primary} 1px 0px 10px;
  opacity: 0.75;
  transition: opacity 0.3s;

  &:hover {
    color: ${theme.themeColors.primary};
    opacity: 1;
    text-decoration: none;
  }
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
          <Flex align='center'>
            <Anchor href='https://github.com/crystal-ball/componentry' mx='sm'>
              <Icon
                id='github'
                fontColor='primary'
                fontSize={24}
                className='d-block'
                font={false}
              />
            </Anchor>

            <Link to='/' fontColor='primary' className='heading-4 line-height-1 raddow'>
              componentry
            </Link>
          </Flex>
        ) : (
          <div />
        )}

        <Flex align='center'>
          {/* Setup */}
          <Dropdown>
            <Dropdown.Trigger mx='sm' css={navButtonStyles}>
              Setup
            </Dropdown.Trigger>
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
            <Dropdown.Trigger mx='sm' css={navButtonStyles}>
              Design System
            </Dropdown.Trigger>
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
            <Dropdown.Trigger mx='sm' css={navButtonStyles}>
              Components
            </Dropdown.Trigger>
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
            <Dropdown.Trigger mx='sm' css={navButtonStyles}>
              Principles
            </Dropdown.Trigger>
            <Dropdown.Content className='align-right'>
              {routes.principles.map(({ name, path }) => (
                <Dropdown.Item key={path} as={Link} to={path}>
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>
        </Flex>
      </Flex>
    </Block>
  )
}
