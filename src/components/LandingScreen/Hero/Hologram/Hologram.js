import { useState } from 'react'
import { Anchor, Block, Flex } from 'componentry'
import cx from 'classnames'

import UndrawHologram from './undraw_hologram.svg'
import classes from './hologram.scss'

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
        className={cx(classes.anchorContainer, 'fade', { visible: hovered })}
      >
        <Anchor
          as='a'
          href='https://undraw.co/'
          color='lead'
          fontSize='sm'
          target='_blank'
          rel='noopener noreferrer'
        >
          Illustation by unDraw
        </Anchor>
      </Flex>
    </Block>
  )
}
