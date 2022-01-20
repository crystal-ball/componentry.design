import React from 'react'
import { Flex, Text } from 'componentry'

import { AppHead } from '@/components/AppHead/AppHead'
import Header from '@/components/Header/Header'
import { ScreenContainer } from '@/components/ScreenContainer/ScreenContainer'

export default function Installation(): JSX.Element {
  return (
    <ScreenContainer>
      <AppHead />
      <Header />
      <Flex px={16} pb={6} direction='column'>
        <Text variant='overline'>Getting started</Text>
        <Text variant='h1' mt={1}>
          Installation
        </Text>
        <Text variant='lead' mt={3}>
          How to install and start using Componentry in your project.
        </Text>
      </Flex>
    </ScreenContainer>
  )
}
