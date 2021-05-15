import React from 'react'
import { Flex } from 'componentry'

type ScreenContainerProps = {
  children: React.ReactNode
}

export function ScreenContainer({ children }: ScreenContainerProps): JSX.Element {
  return (
    <Flex direction='column' className='min-h-screen'>
      {children}
    </Flex>
  )
}
