import React from 'react'
import { Block, Flex, Heading, Icon } from 'componentry'
import { css } from '@emotion/core'

const icons = [
  'announcement',
  'badge',
  'bolt',
  'bug',
  'checkmark-outline',
  'checkmark',
  'chevron',
  'clipboard',
  'close-outline',
  'code',
  'coffee',
  'cog',
  'color-palette',
  'download',
  'education',
  'exclamation-solid',
  'flag',
  'heart',
  'information-solid',
  'layers',
  'link',
  'list-bullet',
  'location-park',
  'mobile-devices',
  'navigation-more',
  'plugin',
  'pylon',
  'reference',
  'save-disk',
  'shield',
  'star-full',
  'tag',
  'timer',
  'trophy',
  'tuning',
]

const iconContainerStyles = css`
  width: 200px;
  margin: 15px 30px;
  padding-bottom: 5px;
`

export default function DevScreen() {
  return (
    <Flex justify='center' className='screen-container'>
      <Flex direction='column' maxWidth={1100}>
        <Heading as='h2'>Zondicon Icons</Heading>
        <Flex wrap='wrap'>
          {icons.map(icon => (
            <Block key={icon} className='border-mito' css={iconContainerStyles}>
              <Icon id={icon} fontSize={28} font={false} className='mr-3' />
              {icon}
            </Block>
          ))}
          <Icon />
        </Flex>
      </Flex>
    </Flex>
  )
}
