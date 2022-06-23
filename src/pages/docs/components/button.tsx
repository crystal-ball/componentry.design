import { Button, Grid, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'
import { TypesAugmentation } from '@/components/TypesAugmentation/TypesAugmentation'

const buttonPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'ButtonPropsDefaults',
)
const buttonStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'ButtonStyles')

const basicExample = `<Button variant='filled'>Filled</Button>
<Button variant='outlined'>Outlined</Button>`

const fullWidthExample = `<Button fullWidth>Componentry</Button>`

const iconExample = `<Button startIcon='github'>Componentry</Button>`

export default function ButtonDocs() {
  invariant(buttonPropsAPIDocs, 'ButtonPropsDefaults doc entry missing')
  invariant(buttonStyleAPIDocs, 'ButtonStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Button />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Button is the primary component for communicating actionable elements to users.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>
        <Text>
          Use the <code>variant</code> prop to switch between button styles. Buttons
          support hover, active, and disabled states.
        </Text>
        <Grid
          className='grid-cols-3'
          gap={4}
          align='center'
          justify='center'
          ml={16}
          my={8}
          style={{ width: 300 }}
        >
          <Text variant='detail' justifySelf='end'>
            variant
          </Text>
          <div>
            <Text>filled</Text>
          </div>
          <div>
            <Text mt={0}>Outlined</Text>
          </div>
          <Text variant='detail' justifySelf='end'>
            base
          </Text>
          <Button>Button</Button>
          <Button variant='outlined'>Button</Button>
          <Text variant='detail' justifySelf='end'>
            hover
          </Text>
          <Button className='C9Y-hover'>Button</Button>
          <Button variant='outlined' className='C9Y-hover'>
            Button
          </Button>
          <Text variant='detail' justifySelf='end'>
            active
          </Text>
          <Button className='C9Y-active'>Button</Button>
          <Button variant='outlined' className='C9Y-active'>
            Button
          </Button>
          <Text variant='detail' justifySelf='end'>
            disabled
          </Text>
          <Button disabled>Button</Button>
          <Button variant='outlined' disabled>
            Button
          </Button>
        </Grid>

        <CodeBlock code={basicExample} language='tsx' />

        <Text variant='h3'>Full width</Text>
        <Text mb={4}>
          Pass the <code>fullWidth</code> prop and the button will fill its container's
          width.
        </Text>
        <Button fullWidth>Componentry</Button>

        <CodeBlock code={fullWidthExample} language='tsx' />

        {/* --- ICONS --- */}
        <Text variant='h3'>Icons</Text>
        <Text mb={4}>
          Pass a <code>startIcon</code> or <code>endIcon</code> to add a Button icon
          element.
        </Text>
        <Button startIcon='github'>Componentry</Button>

        <CodeBlock code={iconExample} language='tsx' />

        <PropsTable componentProps={buttonPropsAPIDocs} />
        <TypesAugmentation name='Button' />
        <ClassesTable name='Button' componentStyles={buttonStyleAPIDocs} />
      </ContentSection>
    </DocsScreenLayout>
  )
}
