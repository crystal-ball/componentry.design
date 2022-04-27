import { Flex, Text } from 'componentry'
import NextLink from 'next/link'
import { BlogScreenLayout } from '@/components/Layout/BlogScreen'

export default function Blog() {
  return (
    <BlogScreenLayout>
      <Flex direction='column' gap={8} align='center'>
        <Text variant='h2' textAlign='center' my={12}>
          Componentry release updates
        </Text>
        <NextLink href='/blog/v4'>
          <Flex direction='column' style={{ maxWidth: '600px', cursor: 'pointer' }}>
            <Flex mt={1} justify='space-between' align='center'>
              <Text variant='h3' color='link'>
                Componentry v4.0.0
              </Text>
              <Text variant='overline'>March 4, 2022</Text>
            </Flex>
            <Text mt={3}>
              Componentry V4 enables a significantly upgraded workflow for customizing
              styles by using PostCSS instead of SASS for styles processing.
            </Text>
          </Flex>
        </NextLink>

        <NextLink href='/blog/v4.1'>
          <Flex direction='column' style={{ maxWidth: '600px', cursor: 'pointer' }}>
            <Flex mt={1} justify='space-between' align='center'>
              <Text variant='h3' color='link'>
                Componentry v4.1.0
              </Text>
              <Text variant='overline'>April 16, 2022</Text>
            </Flex>
            <Text mt={3}>
              Componentry V4.1 upgrades the library utility prop API. The entire set of
              resources for utility props has been consolidated, improved, and made
              available outside the library.
            </Text>
          </Flex>
        </NextLink>

        <NextLink href='/blog/v4.4'>
          <Flex direction='column' style={{ maxWidth: '600px', cursor: 'pointer' }}>
            <Flex mt={1} justify='space-between' align='center'>
              <Text variant='h3' color='link'>
                Componentry v4.4.0
              </Text>
              <Text variant='overline'>April 27, 2022</Text>
            </Flex>
            <Text mt={3}>
              Componentry V4.4 includes a few small improvements to the library setup
              workflow. Notably: utility prop types align with custom themes "out of the
              box", and safelisting classes for Tailwind is now managed.
            </Text>
          </Flex>
        </NextLink>
      </Flex>
    </BlogScreenLayout>
  )
}
