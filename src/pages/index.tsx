import { Block, Button, Flex, Icon, Text } from 'componentry'
import Head from 'next/head'
import NextLink from 'next/link'

import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

import classes from './index.module.css'

export default function Home() {
  return (
    <Flex direction='column' className='min-h-screen'>
      <Head>
        <title>Componentry</title>
      </Head>
      <Header isLandingScreen />

      <Flex as='main' className='flex-1' justify='center' align='center'>
        <Flex pb={6}>
          <Icon id='hologram' className={classes.hologram} />
          <Block ml={10}>
            <Text variant='title'>Componentry</Text>
            <Text variant='lead' mt={4} className={classes.tagline}>
              A high performance React component library for building custom design
              systems.
            </Text>
            <Flex mt={4} gap={2}>
              <NextLink href='/docs/overview' passHref>
                <Button variant='outlined' size='large'>
                  Get started
                </Button>
              </NextLink>
              <Button
                variant='outlined'
                size='large'
                href='https://github.com/crystal-ball/componentry'
              >
                <Block mr={0.5}>
                  <Icon id='github' className={classes.github} visible />
                </Block>
                Github
              </Button>
            </Flex>
          </Block>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
