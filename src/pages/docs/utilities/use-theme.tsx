import { Block, Text } from 'componentry'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const simpleExample = `const { fontSize } = useTheme()`

export default function BlockDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>useTheme()</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          useTheme is a hook that provides access to your application theme value inside
          component contexts.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={2} mb={4}>
          useTheme returns the entire theme value. If a custom theme is passed to
          ComponentryProvider it will be returned.
        </Text>

        <CodeBlock code={simpleExample} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
