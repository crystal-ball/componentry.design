import { Block, Flex, Link, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesLink } from '@/components/ClassesLink/ClassesLink'
import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const linkPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'LinkPropsDefaults',
)
const linkStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'LinkStyles')

export default function LinkDocs() {
  invariant(linkPropsAPIDocs, 'LinkPropsDefaults doc entry missing')
  invariant(linkStyleAPIDocs, 'LinkStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Link />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Link provides actionable elements in the style of hyperlinks.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Variants</Text>
        <Text>
          Link is configured with two variants: <code>text</code>, and{' '}
          <code>inherit</code>
        </Text>

        <Flex
          borderRadius
          border='container'
          justifyContent='center'
          gap={6}
          my={8}
          py={8}
        >
          <Link onClick={console.log}>text variant</Link>
          <Link variant='inherit' onClick={console.log}>
            inherit variant
          </Link>
        </Flex>

        <Text>
          The default variant <code>text</code> can be used as a standalone element, the
          font-size will match the body text font-size. The inherit variant is useful for
          nesting links in other Text elements, eg inside a header:
        </Text>

        <Flex
          borderRadius
          border='container'
          justifyContent='center'
          gap={6}
          my={8}
          py={8}
        >
          <Text variant='h3'>
            Componentry{' '}
            <Link variant='inherit' onClick={console.log}>
              components
            </Link>
          </Text>
        </Flex>

        <Text variant='h2'>Props</Text>
        <Block my={4}>
          <PropsTable componentProps={linkPropsAPIDocs} />
        </Block>

        <Text variant='h2' display='flex' justifyContent='space-between' alignItems='end'>
          Styling
          <Text>
            <ClassesLink sources={linkStyleAPIDocs.sources} name='Text' />
          </Text>
        </Text>

        <Block my={4}>
          <ClassesTable componentStyles={linkStyleAPIDocs} />
        </Block>

        <Text variant='h2'>TypeScript customization</Text>
        <Text>
          Link exposes component prop types customization through module augmentation of{' '}
          <code>'componentry/types/components/Link/Link'</code> using{' '}
          <code>LinkPropsOverrides</code>.
        </Text>
      </ContentSection>
    </DocsScreenLayout>
  )
}
