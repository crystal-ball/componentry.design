import { Alert, Block, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const utilityPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'UtilityPropsBase',
)

const usage = `<Block mt={2}>Easy themed spacing</Block>
// ^ utility prop "mt" converted to utility class "mt-2"`

const augmentation = `declare module 'componentry/types/utils/utility-classes' {
  // eg customizing allowed fontSize values
  interface UtilityPropsOverrides {
    fontSize: 'body' | 'sm' | 'lg' | 'display'
  }
}`

export default function UtilityProps() {
  invariant(utilityPropsAPIDocs, 'UtilityPropsBase doc entry missing')
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Utilities</Text>
      <Text variant='h1' mt={2}>
        Utility Props
      </Text>
      <ContentSection>
        <Text variant='lead' mt={6}>
          Every Componentry component accepts a standard set of utility props. These
          provide easy access to theme styling using utility classes.
        </Text>

        <Block my={4}>
          <CodeBlock code={usage} language='tsx' />
        </Block>

        <Text variant='h2'>TypeScript customization</Text>
        <Text>
          Module augmentation enables overriding the library defined utility props values
          using the <code>UtilityPropsOverrides</code> in{' '}
          <code>componentry/types/utils/utility-classes</code>.
        </Text>

        <Block my={4}>
          <CodeBlock code={augmentation} language='tsx' />
        </Block>

        <Alert color='highlight' mb={8}>
          Any UtilityPropsOverrides definition completely overrides the library defaults,
          they are not merged together. This means if you'd like to add a single value you
          still have to define the entire union type.
        </Alert>

        <Text variant='h3'>Available Props</Text>

        <Block my={4}>
          <PropsTable componentProps={utilityPropsAPIDocs} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
