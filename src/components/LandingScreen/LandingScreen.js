import React from 'react'
import cx from 'classnames'
import { Anchor, Card, Flex, Icon, Text, useMedia } from 'componentry'

import { ScreenContainer } from '@/components/universal'
import Hero from './Hero/Hero'
import classes from './landing-screen.scss'

export default function LandingScreen() {
  const { sm } = useMedia()
  const screenPadding = sm ? 'md' : 'xl'
  return (
    <ScreenContainer pr={0} pl={0}>
      <div className={classes.heroBackground} />

      <Flex mt='xl' pl={screenPadding} pr={screenPadding} pb={sm ? 'xl' : '6rem'}>
        <Hero />
      </Flex>

      <Flex
        backgroundColor='body'
        pb='xl'
        pl={screenPadding}
        pr={screenPadding}
        className={`flex-grow-1 ${classes.content}`}
        align='center'
        direction='column'
      >
        <Card className={cx('mt-xl', { 'w-50': !sm })}>
          <Card.Body>
            <Text variant='heading-3' className='d-flex'>
              <Icon id='color-palette' mr='sm' />
              Radically simpler
            </Text>

            <p className='card-text flex-grow-1'>
              Consistent component APIs mean more time spent building complex UIs and less
              time looking at docs.
            </p>
          </Card.Body>
        </Card>
        <Card className={cx('mt-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Text variant='heading-3' className='d-flex'>
              <Icon id='hot' mr='sm' />
              Radically smaller
            </Text>

            <p className='card-text'>
              A library architecture based on reuse enables a miniscule packge weight.
            </p>
          </Card.Body>
        </Card>
        <Card className={cx('mt-lg', { 'w-50': !sm })}>
          <Card.Body>
            <Text variant='heading-3' className='d-flex'>
              <Icon id='mood-happy-outline' mr='sm' />
              Radically funner
            </Text>

            <p className='card-text'>
              Accessibility helpers, hooks, theming, media observers, library tools let
              you have fun building your application instead of worrying about solved
              problems.
            </p>
          </Card.Body>
        </Card>
      </Flex>
      <Flex py='md' justify='center' backgroundColor='mito'>
        <Anchor href='https://github.com/crystal-ball/componentry'>
          <Icon
            variant='feature'
            id='github'
            fontColor='primary'
            width={sm ? 24 : 32}
            height={sm ? 24 : 32}
          />
        </Anchor>
      </Flex>
    </ScreenContainer>
  )
}
