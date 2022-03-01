import { Block, Text } from 'componentry'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

const blockExample = `<Block backgroundColor='primary-100' p={2} m={0.5}>
  01
</Block>
<Block backgroundColor='primary-100' p={2} m={0.5}>
  02
</Block>
<Block backgroundColor='primary-100' p={2} m={0.5}>
  03
</Block>`

export default function BlockDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Block />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Block is a layout component for creating block elements.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>Block will render a div by default, creating a block element.</Text>

        <Block fontFamily='monospace' fontWeight='bold' my={2}>
          <Block backgroundColor='primary-100' p={2} m={0.5}>
            01
          </Block>
          <Block backgroundColor='primary-100' p={2} m={0.5}>
            02
          </Block>
          <Block backgroundColor='primary-100' p={2} m={0.5}>
            03
          </Block>
        </Block>

        <CodeBlock code={blockExample} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
