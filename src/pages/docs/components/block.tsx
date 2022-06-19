import { Block, Text } from 'componentry'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const blockExample = `<Block backgroundColor='primary-100' p={4} m={1}>
  01
</Block>
<Block backgroundColor='primary-100' p={4} m={1}>
  02
</Block>
<Block backgroundColor='primary-100' p={4} m={1}>
  03
</Block>`

export default function BlockDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Block />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Block is a layout component for creating block elements.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={2}>Block will render a div by default, creating a block element.</Text>

        <Block fontFamily='mono' fontWeight='bold' my={4}>
          <Block backgroundColor='primary-100' p={4} m={1}>
            01
          </Block>
          <Block backgroundColor='primary-100' p={4} m={1}>
            02
          </Block>
          <Block backgroundColor='primary-100' p={4} m={1}>
            03
          </Block>
        </Block>

        <Block my={4}>
          <CodeBlock code={blockExample} language='tsx' />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
