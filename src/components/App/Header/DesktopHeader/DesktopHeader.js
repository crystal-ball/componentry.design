import React from 'react'
import { Anchor, Block, Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'

const navContainerStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
  margin-bottom: 10px;
`

const iconAnchorStyles = css`
  font-size: 24px;
`

export default function Header() {
  return (
    <Block className='bg-ultra'>
      <Flex
        as='nav'
        justify='between'
        align='center'
        borderBottom
        borderColor='ultra'
        borderWidth='3'
        className='px-4 py-3'
        css={navContainerStyles}
      >
        <Link to='/' fontColor='primary' className='h4'>
          Componentry
        </Link>

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
