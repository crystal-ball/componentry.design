import { Text } from 'componentry'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

export default function TextDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Text />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Text is...
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>Text will...</Text>
      </ContentSection>
    </DocsScreenLayout>
  )
}
