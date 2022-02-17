import { Block, Flex, Text } from 'componentry'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

const blockExample = `<Flex backgroundColor='primary-100'>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    01
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    02
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    03
  </Block>
</Flex>`

const shorthandExample = `// With utility props
<Block display="flex" flexDirection="column" justifyContent="center">
  Utility Props
</Block>

// Equivalent Flex
<Flex direction="column" justify="center">
  Flex Props
</Flex>`

export default function FlexDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>Flex</Text>
      <ContentSection>
        <Text variant='lead'>
          Flex is a layout component that makes it easy to create flex layouts. Using
          theme values for spacing with Flex helps make consistent layouts easy.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>
          Flex will render a div with <code>display: flex</code> by default, creating a
          flex container.
        </Text>

        <Block fontFamily='monospace' fontWeight='bold' my={2}>
          <Flex backgroundColor='primary-100'>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              01
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              02
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              03
            </Block>
          </Flex>
        </Block>
        <CodeBlock code={blockExample} language='tsx' />

        {/* --- SHORTHAND --- */}
        <Text variant='h3'>Shorthand props</Text>
        <Text mt={1}>
          Flex provides shorthand props for common flex layout values for convenience:
        </Text>

        <ul className='list-disc list-inside my-2'>
          <li>
            <code>align</code> for <code>alignItems</code>
          </li>
          <li>
            <code>direction</code> for <code>flexDirection</code>
          </li>
          <li>
            <code>wrap</code> for <code>flexWrap</code>
          </li>
          <li>
            <code>justify</code> for <code>justifyContent</code>
          </li>
        </ul>
        <CodeBlock code={shorthandExample} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
