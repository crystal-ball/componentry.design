import { Block, Grid, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const gridPropsAPIDocs = apiDocs.children.find((entry) => entry.name === 'GridPropsBase')

const gridExample = `<Grid
  backgroundColor='primary-100'
  style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    01
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    02
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    03
  </Block>
</Grid>`

const shorthandExample = `<Grid
  backgroundColor='primary-100'
  justify='start'
  style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    01
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    02
  </Block>
  <Block backgroundColor='primary-200' p={2} m={0.5}>
    03
  </Block>
</Grid>`

export default function GridDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Grid />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Grid is a layout component that makes creating CSS grid layouts easy.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>
          Grid will render a div with <code>display: grid</code> by default, creating a
          grid container. You can then define additional grid properties using inline
          styles or classes.
        </Text>

        <Block fontFamily='monospace' fontWeight='bold' my={2}>
          <Grid
            backgroundColor='primary-100'
            style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
          >
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              01
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              02
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              03
            </Block>
          </Grid>
        </Block>

        <CodeBlock code={gridExample} language='tsx' />

        {/* --- SHORTHAND --- */}
        <Text variant='h2'>Shorthand props</Text>
        <Text mt={1}>
          Grid provides shorthand props for common grid alignment values for convenience:
        </Text>

        <ul className='list-disc list-inside my-2'>
          <li>
            <code>align</code> for <code>alignItems</code>
          </li>
          <li>
            <code>justify</code> for <code>justifyItems</code>
          </li>
        </ul>

        <Block fontFamily='monospace' fontWeight='bold' my={2}>
          <Grid
            backgroundColor='primary-100'
            justify='start'
            style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
          >
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              01
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              02
            </Block>
            <Block backgroundColor='primary-200' p={2} m={0.5}>
              03
            </Block>
          </Grid>
        </Block>

        <CodeBlock code={shorthandExample} language='tsx' />

        <Text variant='h2'>Props</Text>
        <Block my={2}>
          <PropsTable props={gridPropsAPIDocs.children} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
