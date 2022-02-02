import Head from 'next/head'
import NextLink from 'next/link'
import { Block, Button, Flex, Text } from 'componentry'

import Header from '@/components/Header/Header'
import { Icon } from '@/components/Icon/Icon'

import classes from './index.module.css'

export default function Home(): JSX.Element {
  return (
    <Flex direction='column' className='min-h-screen'>
      <Head>
        <title>Componentry</title>
      </Head>
      <Header isLandingScreen />

      <Flex as='main' className='flex-1' justify='center' align='center'>
        <Flex pb={6}>
          <Icon id='hologram' width={360} height={295} />
          <Block ml={10}>
            <Text variant='title'>Componentry</Text>
            <Text variant='lead' mt={4} className={classes.tagline}>
              A high performance React component library for building custom design
              systems.
            </Text>
            <Flex mt={4} gap={2}>
              <NextLink href='/docs/installation' passHref>
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
                  <Icon id='github' width={18} height={18} visible />
                </Block>
                Github
              </Button>
            </Flex>
          </Block>
        </Flex>
      </Flex>
    </Flex>
  )
}
