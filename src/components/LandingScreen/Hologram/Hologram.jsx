import React, { useState } from 'react'
import { Anchor, Block, Flex } from 'componentry'

import UndrawHologram from './undraw_hologram.svg'

export default function Hologram() {
  const [hovered, setHovered] = useState(false)
  return (
    <Block
      position='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <UndrawHologram width={360} height={360} />
      <Flex
        position='absolute'
        justify='center'
        width='100%'
        aria-hidden={String(!hovered)}
        style={{ opacity: 0.75, bottom: 4 }}
      >
        <Anchor
          href='https://undraw.co/'
          fontSize='sm'
          target='_blank'
          rel='noopener noreferrer'
        >
          Rad illustation by unDraw
        </Anchor>
      </Flex>
    </Block>
  )
}
