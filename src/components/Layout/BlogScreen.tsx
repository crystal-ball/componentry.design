import { Flex } from 'componentry'

import Header from '../Header/Header'

export function BlogScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' className='min-h-screen'>
      <Header />
      <Flex px={32} mt={6} className='mx-auto'>
        <Flex pb={12} direction='column'>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

type ScreenContainerProps = {
  children: React.ReactNode
}
