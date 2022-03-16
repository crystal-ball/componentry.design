import { Block, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const utilityPropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'UtilityPropsBase',
)

const usage = `<Block mt={2}>Easy themed spacing</Block>
// ^ utility prop "mt" converted to utility class "mt-2"`

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

        <Text variant='h3'>Available Props</Text>

        <Block my={4}>
          <PropsTable componentProps={utilityPropsAPIDocs} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
