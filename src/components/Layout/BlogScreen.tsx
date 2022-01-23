import { Flex } from 'componentry'

import { AppHead } from '../AppHead/AppHead'
import Header from '../Header/Header'

export function BlogScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' className='min-h-screen'>
      <AppHead />
      <Header />
      <Flex px={16} mt={3}>
        <Flex pb={6} direction='column'>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

type ScreenContainerProps = {
  children: React.ReactNode
}
