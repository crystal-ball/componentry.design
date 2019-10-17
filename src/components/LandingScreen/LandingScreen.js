import React from 'react'
import { Flex, Heading, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

import Radpack from '@/media/radpack.jpg'

const heroContainerStyles = ({ backgroundColors, borderColors }) => css`
  background-color: ${backgroundColors.ultra};
  background-image: url(${Radpack});
  position: relative;
  height: 100vh;
  border-bottom: 1px solid ${borderColors.mito};
  width: 100%;
`

const heroTitleStyles = css`
  font-size: 114px;
  line-height: 1;
`

const iconContainerStyles = css`
  color: #a8ffdb;
`

const heroTextStyles = css`
  margin-top: 14px;
  max-width: 375px;
  font-size: 28px;
  line-height: 36px;
`

export default function LandingScreen() {
  return (
    <div className='screen d-flex w-100'>
      <Flex direction='column' justify='center' pt='xl' css={heroContainerStyles}>
        <Flex justify='center'>
          <Heading textAlign='center' css={heroTitleStyles}>
            <Icon id='tuning' css={iconContainerStyles} />
            Componentry
          </Heading>
          <Text css={heroTextStyles}>
            React components designed for efficiently composing complex application UIs
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}
