import React from 'react'
import { Anchor, Flex, Icon, useMedia } from 'componentry'

export default function Header() {
  const { sm } = useMedia()
  return (
    sm && (
      <Flex justify='center' align='center' py='sm' px='base' background='mito'>
        <Anchor href='https://github.com/crystal-ball/componentry' mx='sm' fontSize='xl'>
          <Icon id='github' className='d-block' font={false} />
        </Anchor>
      </Flex>
    )
  )
}
