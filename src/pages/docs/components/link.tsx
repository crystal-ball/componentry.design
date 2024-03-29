import { Flex, Link, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'
import { TypesAugmentation } from '@/components/TypesAugmentation/TypesAugmentation'

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
        <Text>Link will inherit font size by default.</Text>

        <Flex
          borderRadius
          border='container'
          justifyContent='center'
          gap={6}
          my={8}
          py={8}
        >
          {/* eslint-disable-next-line no-console -- docs example */}
          <Link onClick={console.log}>Standalone link</Link>
        </Flex>

        <Flex
          borderRadius
          border='container'
          justifyContent='center'
          gap={6}
          my={8}
          py={8}
        >
          <Text variant='h3'>
            {/* eslint-disable-next-line no-console -- docs example */}
            Componentry <Link onClick={console.log}>components</Link>
          </Text>
        </Flex>

        <PropsTable componentProps={linkPropsAPIDocs} />
        <TypesAugmentation name='Link' />
        <ClassesTable name='Link' componentStyles={linkStyleAPIDocs} />
      </ContentSection>
    </DocsScreenLayout>
  )
}
