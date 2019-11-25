import React from 'react'
import { Anchor, Flex, Icon, useMedia } from 'componentry'
import { css } from '@emotion/core'

const footerStyles = css`
  z-index: 1;
`

export default function Header() {
  const { sm } = useMedia()
  return (
    sm && (
      <Flex
        justify='center'
        align='center'
        py='sm'
        px='base'
        background='mito'
        css={footerStyles}
      >
        <Anchor href='https://github.com/crystal-ball/componentry' mx='sm' fontSize='xl'>
          <Icon id='github' className='d-block' font={false} />
        </Anchor>
      </Flex>
    )
  )
}
