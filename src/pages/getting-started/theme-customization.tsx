import React from 'react'
import { Flex, Text } from 'componentry'

import Header from '@/components/Header/Header'
import { ScreenContainer } from '@/components/ScreenContainer/ScreenContainer'

export default function ThemeCustomization(): JSX.Element {
  return (
    <ScreenContainer>
      <Header />
      <Flex px={128} pb={48} direction='column'>
        <Text variant='overline'>Getting started</Text>
        <Text variant='heading-1' mt={8}>
          Theme customization
        </Text>
        <Text variant='lead' mt={24}>
          How to customize the base application theme.
        </Text>
      </Flex>
    </ScreenContainer>
  )
}
