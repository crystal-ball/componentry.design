import React from 'react'
import { css } from '@emotion/core'
import cx from 'classnames'
import { Anchor, Card, Flex, Heading, Icon, Text, useMedia } from 'componentry'

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

const contentSectionStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
  flex-grow: 1;
`

export default function LandingScreen() {
  const { sm } = useMedia()
  return (
    <ScreenContainer>
      <div css={heroBackgroundStyles} />
      <Flex direction='column' justify='center' m={sm ? 'sm' : 'xl'} pb='xl'>
        <Heading
          variant={sm ? 'heading-1' : 'display-1'}
          fontColor='primary'
          className='raddow-1'
          data-testid='title'
        >
          componentry
        </Heading>
        <Flex align='center'>
          <Icon id='tuning' className='display-1' fontColor='anchor' font={false} />
          <Text variant='lead' className='raddow-2' ml='base' mb={0} maxWidth={450}>
            A design system for building radical React applications
          </Text>
        </Flex>
      </Flex>

      <Flex
        background='background'
        p='xl'
        className='screen-row'
        align='center'
        direction='column'
        css={contentSectionStyles}
      >
        <Card className={cx('mb-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Heading variant='heading-4' className='d-flex'>
              <Icon id='color-palette' mr='sm' />
              Radically simpler
            </Heading>

            <p className='card-text flex-grow-1'>
              Consistent component APIs mean more time spent building complex UIs and less
              time looking at docs.
            </p>
          </Card.Body>
        </Card>
        <Card className={cx('mb-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Heading variant='heading-4' className='d-flex'>
              <Icon id='hot' mr='sm' />
              Radically smaller
            </Heading>

            <p className='card-text'>
              A library architecture based on reuse enables a miniscule packge weight.
            </p>
          </Card.Body>
        </Card>
        <Card className={cx({ 'w-50': !sm })}>
          <Card.Body>
            <Heading variant='heading-4' className='d-flex'>
              <Icon id='mood-happy-outline' mr='sm' />
              Radically funner
            </Heading>

            <p className='card-text'>
              Accessibility helpers, hooks, theming, media observers, library tools let
              you have fun building your application instead of worrying about solved
              problems.
            </p>
          </Card.Body>
        </Card>
      </Flex>
      <Flex p='base' justify='center' background='mito' className='screen-row'>
        <Anchor href='https://github.com/crystal-ball/componentry'>
          <Icon
            id='github'
            fontColor='primary'
            css={css`
              display: block;
              font-size: ${sm ? '20' : '32'}px;
            `}
          />
        </Anchor>
      </Flex>
    </ScreenContainer>
  )
}
