import React from 'react'
import { Anchor, Block, Flex, Icon } from 'componentry'
import { css } from '@emotion/core'

const navContainerStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(17, 15, 22, 0.55);
  z-index: 1;
`

const iconAnchorStyles = css`
  font-size: 32px;
`

export default function AppHeader() {
  return (
    <Block className='bg-ultra'>
      <Flex
        as='nav'
        justify='between'
        align='center'
        borderTop
        borderBottom
        borderColor='mito'
        className='px-4 py-3'
        css={navContainerStyles}
      >
        <Anchor href='https://github.com/crystal-ball/componentry' css={iconAnchorStyles}>
          <Icon id='github' className='d-block' font={false} />
        </Anchor>

        <div>
          <Anchor as='button' mx='sm'>
            Setup
          </Anchor>
          <Anchor as='button' mx='sm'>
            Principles
          </Anchor>
          <Anchor as='button' mx='sm'>
            Styles
          </Anchor>
          <Anchor as='button' mx='sm'>
            Components
          </Anchor>
        </div>
      </Flex>
    </Block>
  )
}
