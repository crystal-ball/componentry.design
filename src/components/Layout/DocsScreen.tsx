import NextLink from 'next/link'
import { Flex, Link, Text } from 'componentry'

import Header from '../Header/Header'

import classes from './DocsScreen.module.css'

export function DocsScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' className='min-h-screen'>
      <Header />
      <Flex px={16} mt={3}>
        <DocsNav />
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

const components = ['block', 'flex', 'icon', 'grid', 'text']

function DocsNav() {
  return (
    <Flex as='nav' direction='column' pb={3} className={classes.nav}>
      <Text variant='lead'>Getting Started</Text>
      <Flex pl={1} pt={0.5} direction='column' gap={0.5} borderLeft>
        <NextLink href='/docs/overview' passHref>
          <Link>Overview</Link>
        </NextLink>
        <NextLink href='/docs/installation' passHref>
          <Link>Installation</Link>
        </NextLink>
        <NextLink href='/docs/theme-customization' passHref>
          <Link>Customizing: Theme</Link>
        </NextLink>
        <NextLink href='/docs/components-customization' passHref>
          <Link>Customizing: Components</Link>
        </NextLink>
        <NextLink href='/docs/tailwind-integration' passHref>
          <Link>Tailwind Integration</Link>
        </NextLink>
      </Flex>
      <Text variant='lead' mt={2}>
        Components
      </Text>
      <Flex pl={1} pt={0.5} direction='column' gap={0.5} borderLeft>
        {components.map((component) => (
          <NextLink key={component} href={`/docs/components/${component}`} passHref>
            <Link className='capitalize'>{component}</Link>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  )
}
