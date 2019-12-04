import React from 'react'
import { useLocation } from 'react-router-dom'
import { Anchor, Block, Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'

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
          <Link to='/setup' mx='sm'>
            Setup
          </Link>
          <Link to='/design-system' mx='sm'>
            Design System
          </Link>
          <Link to='/components' mx='sm'>
            Components
          </Link>
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
