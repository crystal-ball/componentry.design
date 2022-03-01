import { Block, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesLink } from '@/components/ClassesLink/ClassesLink'
import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const textPropsAPIDocs = apiDocs.children.find((entry) => entry.name === 'TextPropsBase')
const textStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'TextStyles')

console.log(textStyleAPIDocs)

const basicUsage = `<Text variant='h3'>Componentry Components</Text>`

const defaultMapping = `const textElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  code: 'code',
  small: 'small',
}`

const elementsRendered = `<Text variant="h1">Componentry Components</Text>
// ^ Renders an h1 element

<Text>Must go faster.</Text>
// ^ Defaults to 'body' variant, rendering a p element
`

const mappingCustomization = `import { configureTextElementsMap } from 'componentry'

// Add a title variant that renders an h1, and render a div instead of a p
// for body variants.
configureTextElementsMap({
  title: 'h1',
  body: 'div',
})`

export default function TextDocs() {
  invariant(textPropsAPIDocs, 'TextPropsBase doc entry missing')
  invariant(textStyleAPIDocs, 'TextStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Text />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Text provides performant, consistently themed typography for your application.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>
          Use the <code>variant</code> prop to switch between typography styles. You can
          omit a variant value to default to <code>'body'</code>.
        </Text>

        <Text variant='h3'>Componentry Components</Text>

        <Block my={2}>
          <CodeBlock code={basicUsage} language='tsx' />
        </Block>

        <Text variant='h2'>Variant to element mapping</Text>

        <Text mt={1}>
          Text renders elements based on its variant value. Out of the box Componentry
          includes the following text elements mapping:
        </Text>

        <Block my={2}>
          <CodeBlock code={defaultMapping} language='tsx' />
        </Block>

        <Text mt={1}>
          With this default mapping the following usage would render an <code>h1</code>{' '}
          and <code>p</code> element:
        </Text>

        <Block my={2}>
          <CodeBlock code={elementsRendered} language='tsx' />
        </Block>

        <Text mt={1}>
          You can customize this mapping using the exported{' '}
          <code>configureTextElementsMap</code> helper. Any mapping you pass is merged
          with the default, simplifying adding new variants and customizing the defaults.
        </Text>

        <Block my={2}>
          <CodeBlock code={mappingCustomization} language='tsx' />
        </Block>

        <Text variant='h2'>Props</Text>
        <Block my={2}>
          <PropsTable componentProps={textPropsAPIDocs} />
        </Block>

        <Text variant='h2' display='flex' justifyContent='between' alignItems='end'>
          Styling
          <Text>
            <ClassesLink sources={textStyleAPIDocs.sources} name='Text' />
          </Text>
        </Text>

        <Block my={2}>
          <ClassesTable componentStyles={textStyleAPIDocs} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
