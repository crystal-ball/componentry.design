import NextLink from 'next/link'
import { Block, Button, Flex, Text } from 'componentry'

import { AppHead } from '@/components/AppHead/AppHead'
import Header from '@/components/Header/Header'
import { ScreenContainer } from '@/components/ScreenContainer/ScreenContainer'
import Github from '@/media/github.svg'
import Hologram from '@/media/hologram.svg'

import classes from './index.module.css'

export default function Home(): JSX.Element {
  return (
    <ScreenContainer>
      <AppHead />
      <Header />

      <Flex as='main' className='flex-1' justify='center' align='center'>
        <Flex>
          <Hologram width={360} height={295} />
          <Block ml={10}>
            <Text variant='title'>Componentry</Text>
            <Text variant='lead' mt={4} className={classes.tagline}>
              A high performance React component library for building delightful
              applications.
            </Text>
            <Flex mt={4} gap={2}>
              <NextLink href='/getting-started/installation'>
                {/* @ts-expect-error -- augmentation not available yet */}
                <Button variant='outlined' size='large'>
                  Get started
                </Button>
              </NextLink>
              <Button
                variant='outlined'
                // @ts-expect-error -- augmentation not available yet
                size='large'
                href='https://github.com/crystal-ball/componentry'
              >
                <Block mr={0.5}>
                  <Github width={18} height={18} />
                </Block>
                Github
              </Button>
            </Flex>
          </Block>
        </Flex>
      </Flex>
    </ScreenContainer>
  )
}
