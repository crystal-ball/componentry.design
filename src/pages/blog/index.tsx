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
            <Flex mt={1} justify='between' align='center'>
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
      </Flex>
    </BlogScreenLayout>
  )
}
