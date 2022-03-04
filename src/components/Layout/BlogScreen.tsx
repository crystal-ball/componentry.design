import { Flex } from 'componentry'

import Header from '../Header/Header'

export function BlogScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' className='min-h-screen'>
      <Header />
      <Flex px={16} mt={3} mx='auto'>
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
