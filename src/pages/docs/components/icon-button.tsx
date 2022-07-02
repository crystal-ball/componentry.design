import { Grid, Icon, IconButton, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'
import { TypesAugmentation } from '@/components/TypesAugmentation/TypesAugmentation'

const iconButtonPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'IconButtonPropsDefaults',
)
const iconButtonStyleAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'IconButtonStyles',
)

const basicExample = `<IconButton icon={<Icon id='settings' />} />`

export default function IconButtonDocs() {
  invariant(iconButtonPropsAPIDocs, 'IconButtonPropsDefaults doc entry missing')
  invariant(iconButtonStyleAPIDocs, 'IconButtonStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<IconButtonDocs />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          IconButton is an accessible action element represented by an icon.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>
        <Text>
          Use the <code>variant</code> prop to switch between button styles.
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
          <IconButton icon={<Icon id='settings' />} />
          <IconButton variant='outlined' icon={<Icon id='settings' />} />
          <Text variant='detail' justifySelf='end'>
            hover
          </Text>
          <IconButton className='C9Y-hover' icon={<Icon id='settings' />} />
          <IconButton
            variant='outlined'
            className='C9Y-hover'
            icon={<Icon id='settings' />}
          />
          <Text variant='detail' justifySelf='end'>
            active
          </Text>
          <IconButton className='C9Y-active' icon={<Icon id='settings' />} />
          <IconButton
            variant='outlined'
            className='C9Y-active'
            icon={<Icon id='settings' />}
          />
          <Text variant='detail' justifySelf='end'>
            disabled
          </Text>
          <IconButton icon={<Icon id='settings' />} disabled />
          <IconButton variant='outlined' icon={<Icon id='settings' />} disabled />
        </Grid>

        <CodeBlock code={basicExample} language='tsx' />

        <PropsTable componentProps={iconButtonPropsAPIDocs} />
        <TypesAugmentation name='IconButton' />
        <ClassesTable name='IconButton' componentStyles={iconButtonStyleAPIDocs} />
      </ContentSection>
    </DocsScreenLayout>
  )
}
