import React from 'react'
import { Anchor, Block, Flex, Icon, Text, useMedia } from 'componentry'

import { ScreenContainer } from '@/components/universal'
import Hero from './Hero/Hero'
import classes from './landing-screen.scss'

export default function LandingScreen() {
  const { sm } = useMedia()
  const screenPadding = sm ? 'md' : 'xl'
  return (
    <ScreenContainer pr={0} pl={0} docsSpacing={false}>
      <div className={classes.heroBackground} />

      <Flex mt='xl' pl={screenPadding} pr={screenPadding} pb={sm ? 'xl' : '6rem'}>
        <Hero />
      </Flex>

      <Flex
        backgroundColor='body'
        pb='xl'
        px={screenPadding}
        className={`flex-grow-1 ${classes.content}`}
        align='center'
        direction='column'
      >
        <Block>
          <Text variant='heading-2' mt='xl'>
            Flexibility, first and foremost
          </Text>
          <Text mt='md'>
            Most component libraries also ship with an implicit design system, and are
            built around assumptions of how your application will look. Attempts to
            customize these component libaries beyond those built in assumptions typically
            requires workarounds or compromises.
          </Text>

          <Text>Componentry is designed to eliminate design system compromises.</Text>

          <Text>
            Componentry&apos;s focus, first and foremost is providing the flexibility
            needed to build a truly bespoke design system.
          </Text>

          <Text variant='heading-2' mt='lg'>
            Really Sassy SASS
          </Text>
          <Text mt='md'>
            Componentry styles are written in SASS using maps and mixins that let you
            customize every line of component styles. As a result you no longer have to
            fight with base styles to get the customized look you need.
          </Text>

          <Text variant='heading-2' mt='lg'>
            Radical components
          </Text>

          <Text mt='md'>
            Radical components are built with smart reuse and consistent APIs, resulting
            in an intuitive developer experience and a feather light library footprint of
            less than 12kb minified.
          </Text>

          <Text>Build something radical!</Text>
          <Flex
            borderTop
            mt='lg'
            pt='lg'
            direction={sm ? 'column' : null}
            justify='evenly'
            width='100%'
            fontSize='lg'
          >
            <Anchor to='getting-started/overview'>Getting started</Anchor>
            <Anchor to='principles/library-principles'>Library Principles</Anchor>
            <Anchor to='/components'>Components</Anchor>
          </Flex>
        </Block>
      </Flex>
      <Flex py='md' justify='center' backgroundColor='mito'>
        <Anchor as='a' href='https://github.com/crystal-ball/componentry'>
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
