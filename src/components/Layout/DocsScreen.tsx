import { Flex, Link, Text } from 'componentry'
import NextLink from 'next/link'

import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'

import classes from './DocsScreen.module.css'

export function DocsScreenLayout({ children }: ScreenContainerProps) {
  return (
    <Flex direction='column' minHeight='screen'>
      <Header />
      <Flex px={16} mt={3} flexGrow>
        <DocsNav />
        <Flex pt={4} pb={6} direction='column'>
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

const components = ['block', 'flex', 'icon', 'grid', 'text', 'componentry-provider']

function DocsNav() {
  return (
    <Flex as='nav' direction='column' pb={6} className={classes.nav}>
      <Text variant='lead'>Getting Started</Text>
      <Flex pl={2} pt={1} direction='column' gap={1} borderLeft='nav' className='tab-8'>
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

      <Text variant='lead' mt={4}>
        Guides
      </Text>
      <Flex pl={2} pt={1} direction='column' gap={1} borderLeft='nav'>
        <NextLink href='/docs/utility-props' passHref>
          <Link>Utility Props</Link>
        </NextLink>
      </Flex>

      <Text variant='lead' mt={4}>
        Customization
      </Text>
      <Flex pl={2} pt={1} direction='column' gap={1} borderLeft='nav'>
        <NextLink href='/docs/spacing' passHref>
          <Link>Spacing</Link>
        </NextLink>
      </Flex>

      <Text variant='lead' mt={4}>
        Components
      </Text>
      <Flex pl={2} pt={1} direction='column' gap={1} borderLeft='nav'>
        {components.map((component) => (
          <NextLink key={component} href={`/docs/components/${component}`} passHref>
            <Link className='capitalize'>
              {component.replace(/-[a-z]/, (match) => match.slice(1).toUpperCase())}
            </Link>
          </NextLink>
        ))}
      </Flex>

      <Text variant='lead' mt={4}>
        Utilities
      </Text>
      <Flex pl={2} pt={1} direction='column' gap={1} borderLeft='nav'>
        <NextLink href='/docs/utilities/use-theme' passHref>
          <Link>useTheme</Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}
