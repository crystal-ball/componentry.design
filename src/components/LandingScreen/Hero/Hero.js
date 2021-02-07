import { Flex, Text, useMedia } from 'componentry'

import Hologram from './Hologram/Hologram'

export default function Hero() {
  const { sm } = useMedia()

  if (sm) {
    return (
      <Flex direction='column' justify='center'>
        <Text variant='display-1' fontSize='2rem' align='center'>
          {`<Componentry />`}
        </Text>

        <Text variant='lead' align='center' className='text-shadow-subtitle'>
          A React component library for building radical design systems
        </Text>
      </Flex>
    )
  }

  return (
    <>
      <Hologram />
      <Flex direction='column' justify='center' ml={sm ? 'sm' : 'xl'}>
        <Text variant='display-1' mb='sm' data-testid='title'>
          {`<Componentry />`}
        </Text>
        <Text variant='lead' className='text-shadow-subtitle' ml='md' maxWidth={500}>
          A React component library for building radical design systems
        </Text>
      </Flex>
    </>
  )
}
