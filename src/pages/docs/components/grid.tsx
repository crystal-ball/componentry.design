import { Block, Grid, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const gridPropsAPIDocs = apiDocs.children.find((entry) => entry.name === 'GridPropsBase')

const gridExample = `<Grid
  backgroundColor='primary-100'
  style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
>
  <Block backgroundColor='primary-200' p={4} m={1}>
    01
  </Block>
  <Block backgroundColor='primary-200' p={4} m={1}>
    02
  </Block>
  <Block backgroundColor='primary-200' p={4} m={1}>
    03
  </Block>
</Grid>`

const shorthandExample = `<Grid
  backgroundColor='primary-100'
  justify='start'
  style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
>
  <Block backgroundColor='primary-200' p={4} m={1}>
    01
  </Block>
  <Block backgroundColor='primary-200' p={4} m={1}>
    02
  </Block>
  <Block backgroundColor='primary-200' p={4} m={1}>
    03
  </Block>
</Grid>`

const refExample = `import { useRef } from 'react'
import { RefGrid } from 'componentry'

function LayoutWithRef() {
  const ref = useRef(null)
  return <RefGrid ref={ref} p={4}></RefGrid>
}`

export default function GridDocs() {
  invariant(gridPropsAPIDocs, 'GridPropsBase doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Grid />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Grid is a layout component that makes creating CSS grid layouts easy.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={2}>
          Grid will render a div with <code>display: grid</code> by default, creating a
          grid container. You can then define additional grid properties using inline
          styles or classes.
        </Text>

        <Block fontFamily='mono' fontWeight='bold' my={4}>
          <Grid
            backgroundColor='primary-100'
            style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
          >
            <Block backgroundColor='primary-200' p={4} m={1}>
              01
            </Block>
            <Block backgroundColor='primary-200' p={4} m={1}>
              02
            </Block>
            <Block backgroundColor='primary-200' p={4} m={1}>
              03
            </Block>
          </Grid>
        </Block>

        <Block my={4}>
          <CodeBlock code={gridExample} language='tsx' />
        </Block>

        <Text variant='h3'>Usage with refs</Text>
        <Text>
          If you need to pass a ref to Grid, use a <code>RefGrid</code>:
        </Text>
        <Block my={4}>
          <CodeBlock code={refExample} language='tsx' />
        </Block>

        {/* --- SHORTHAND --- */}
        <Text variant='h2'>Shorthand props</Text>
        <Text mt={2}>
          Grid provides shorthand props for common grid alignment values for convenience:
        </Text>

        <ul className='list-disc list-inside my-4'>
          <li>
            <code>align</code> for <code>alignItems</code>
          </li>
          <li>
            <code>justify</code> for <code>justifyItems</code>
          </li>
        </ul>

        <Block fontFamily='mono' fontWeight='bold' my={4}>
          <Grid
            backgroundColor='primary-100'
            justify='start'
            style={{ gridTemplateColumns: 'repeat(3, minmax(100px, 1fr))' }}
          >
            <Block backgroundColor='primary-200' p={4} m={1}>
              01
            </Block>
            <Block backgroundColor='primary-200' p={4} m={1}>
              02
            </Block>
            <Block backgroundColor='primary-200' p={4} m={1}>
              03
            </Block>
          </Grid>
        </Block>

        <CodeBlock code={shorthandExample} language='tsx' />

        <Text variant='h2'>Props</Text>
        <Block my={4}>
          <PropsTable componentProps={gridPropsAPIDocs} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
