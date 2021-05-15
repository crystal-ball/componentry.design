import Head from 'next/head'
import NextLink from 'next/link'
import { Block, Button, Flex, Text } from 'componentry'

import Header from '@/components/Header/Header'
import { ScreenContainer } from '@/components/ScreenContainer/ScreenContainer'
import Github from '@/media/github.svg'
import Hologram from '@/media/hologram.svg'

export default function Home(): JSX.Element {
  return (
    <ScreenContainer>
      <Head>
        <title>Componentry</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Libre+Baskerville:wght@700&family=Nunito+Sans:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />
      <Flex as='main' className='flex-1' justify='center' align='center'>
        <Flex>
          <Hologram width={360} height={295} />
          <Block ml={80}>
            <Text variant='title'>Componentry</Text>
            <Text variant='lead' width='500px' mt={32}>
              A high performance React component library for building delightful
              applications.
            </Text>
            <Flex mt={64}>
              <NextLink href='/getting-started/installation'>
                <Button variant='secondary' size='lg'>
                  Get started
                </Button>
              </NextLink>
              <Button
                variant='secondary'
                size='lg'
                ml={24}
                href='https://github.com/crystal-ball/componentry'
              >
                <Block width={16} height={16} mr={8}>
                  <Github width={16} height={16} />
                </Block>
                Github
              </Button>
            </Flex>
          </Block>
        </Flex>
      </Flex>
      <footer>Footer</footer>
    </ScreenContainer>
  )
}
