import { Flex } from 'componentry'

import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'

export function BlogScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' minHeight='screen'>
      <Header />
      <Flex px={32} mt={6} mx='auto' flexGrow>
        <Flex pb={12} direction='column'>
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

type ScreenContainerProps = {
  children: React.ReactNode
}
