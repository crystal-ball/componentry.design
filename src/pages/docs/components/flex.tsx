import { Block, Flex, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const flexPropsAPIDocs = apiDocs.children.find((entry) => entry.name === 'FlexPropsBase')

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
  invariant(flexPropsAPIDocs, 'FlexPropsBase doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>Flex</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Flex is a layout component that makes creating flex layouts easy.
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
        <Text variant='h2'>Shorthand props</Text>
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

        <Text variant='h2'>Props</Text>
        <Block my={2}>
          <PropsTable componentProps={flexPropsAPIDocs} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
