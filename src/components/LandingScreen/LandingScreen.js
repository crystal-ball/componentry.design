import React from 'react'
import { Flex, Heading, Icon, Text, useMedia } from 'componentry'
import { css } from '@emotion/core'
import classnames from 'classnames'

import Radpack from '@/media/radpack.jpg'
import { ScreenContainer } from '@/components/universal'

const heroBackgroundStyles = ({ backgroundColors }) => css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${backgroundColors.ultra};
  background-image: url(${Radpack});
  z-index: -1;
`

const heroTextStyles = css`
  max-width: 450px;
`

export default function LandingScreen() {
  const { sm } = useMedia()
  return (
    <ScreenContainer>
      <div css={heroBackgroundStyles} />
      <Flex direction='column' justify='center' pt='xl'>
        <Heading
          fontColor='primary'
          className={classnames({
            'display-1': !sm,
          })}
          data-testid='title'
        >
          Componentry
        </Heading>
        <Flex align='center'>
          <Icon id='tuning' className='display-1' fontColor='anchor' font={false} />
          <Text
            className={classnames({ lead: !sm, 'font-size-xl': sm })}
            ml='base'
            css={heroTextStyles}
          >
            A design system for building radical React applications
          </Text>
        </Flex>
      </Flex>
    </ScreenContainer>
  )
}

// Sections:
// Radically simpler
// Radically smaller
// Radically accessible
