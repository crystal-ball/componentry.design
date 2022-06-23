import { Block, Paper, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'
import { TypesAugmentation } from '@/components/TypesAugmentation/TypesAugmentation'

const paperPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'PaperPropsDefaults',
)
const paperStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'PaperStyles')

const paperExample = `<Paper variant='flat' p={2}>
  Custom container content
</Paper>`

export default function PaperDocs() {
  invariant(paperPropsAPIDocs, 'PaperPropsDefaults doc entry missing')
  invariant(paperStyleAPIDocs, 'PaperStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Paper />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Paper is a layout component for creating element containers.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={2}>
          Paper will render a div by default, creating a container for any custom element.
          It's most often used to create containers with consistent border, border-radius,
          and box-shadow styles.
        </Text>

        <Paper p={2} mt={4}>
          Custom container content
        </Paper>

        <Block my={4}>
          <CodeBlock code={paperExample} language='tsx' />
        </Block>

        <PropsTable componentProps={paperPropsAPIDocs} />
        <TypesAugmentation name='Paper' />
        <ClassesTable name='Paper' componentStyles={paperStyleAPIDocs} />
      </ContentSection>
    </DocsScreenLayout>
  )
}
