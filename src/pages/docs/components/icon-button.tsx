import { Text } from 'componentry'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function IconButtonDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<IconButtonDocs />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          IconButton is an accessible action element represented by an icon.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>
      </ContentSection>
    </DocsScreenLayout>
  )
}
