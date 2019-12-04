import React from 'react'
import { Card, Flex, Heading, Icon, Text, useMedia } from 'componentry'
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

const contentSectionStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
`

export default function LandingScreen() {
  const { sm } = useMedia()
  return (
    <ScreenContainer>
      <div css={heroBackgroundStyles} />
      <Flex direction='column' justify='center' py='xl' mb='xl'>
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

      <Flex
        background='background'
        p='lg'
        className='fullscreen-row'
        align='center'
        direction='column'
        css={contentSectionStyles}
      >
        <Card className={classnames('mb-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Heading uppercase as='h4' fontSize='base'>
              <Icon id='color-palette' font={false} /> Radically simpler
            </Heading>

            <p className='card-text flex-grow-1'>
              Consistent component APIs mean more time spent building complex UIs and less
              time looking at docs.
            </p>
          </Card.Body>
        </Card>
        <Card className={classnames('mb-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Heading uppercase as='h4' fontSize='base'>
              <Icon id='hot' font={false} /> Radically smaller
            </Heading>

            <p className='card-text'>
              A library architecture based on reuse enables a miniscule packge weight.
            </p>
          </Card.Body>
        </Card>
        <Card className={classnames({ 'w-50': !sm })}>
          <Card.Body>
            <Heading uppercase as='h4' fontSize='base'>
              <Icon id='mood-happy-outline' font={false} /> Radically funner
            </Heading>

            <p className='card-text'>
              Accessibility helpers, hooks, theming, media observers, library tools let
              you have fun building your application instead of worrying about solved
              problems.
            </p>
          </Card.Body>
        </Card>
      </Flex>
    </ScreenContainer>
  )
}
