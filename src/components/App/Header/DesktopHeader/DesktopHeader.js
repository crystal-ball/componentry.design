import React from 'react'
import { useLocation } from 'react-router-dom'
import { Anchor, Block, Dropdown, Flex, Icon } from 'componentry'

import { Link } from '@/components/universal'
import { routes } from '@/components/App/routes'

import classes from './desktop-header.scss'

export default function Header() {
  const location = useLocation()
  const renderLandingLink = location.pathname !== '/'

  return (
    <Block backgroundColor='ultra'>
      <Flex
        borderBottom
        as='nav'
        justify='between'
        align='center'
        borderColor='ultra'
        borderWidth='3'
        className='box-shadow-primary px-lg py-md'
      >
        {renderLandingLink ? (
          <Flex align='center'>
            <Anchor href='https://github.com/crystal-ball/componentry' mx='sm'>
              <Icon
                variant='feature'
                id='github'
                fontColor='primary'
                width={24}
                height={24}
              />
            </Anchor>

            <Link
              to='/'
              fontColor='primary'
              fontSize='lg'
              letterSpacing='0.1em'
              className='line-height-1 text-shadow-display'
            >
              componentry
            </Link>
          </Flex>
        ) : (
          <div />
        )}

        <Flex align='center'>
          {/* Setup */}
          <Link to='/setup' className={classes.button} mx='sm'>
            Setup
          </Link>

          {/* Design System */}
          <Dropdown>
            <Dropdown.Trigger className={classes.button} mx='sm'>
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
            <Dropdown.Trigger className={classes.button} mx='sm'>
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
            <Dropdown.Trigger className={classes.button} mx='sm'>
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
