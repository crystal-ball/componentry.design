import { Badge, Flex, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { PropsTable } from '@/components/PropsTable/PropsTable'
import { TypesAugmentation } from '@/components/TypesAugmentation/TypesAugmentation'

const badgePropsAPIDocs = apiDocs.children.find(
  (entry) => entry.name === 'BadgePropsDefaults',
)
const badgeStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'BadgeStyles')

export default function BadgeDocs() {
  invariant(badgePropsAPIDocs, 'BadgePropsDefaults doc entry missing')
  invariant(badgeStyleAPIDocs, 'BadgeStyles doc entry missing')

  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Badge />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Badge provides a short label for describing elements.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Variants</Text>
        <Text>Badge has a single variant by default, filled:</Text>

        <Flex
          borderRadius
          border='container'
          justifyContent='center'
          gap={6}
          my={8}
          py={8}
        >
          <Badge>Badge</Badge>
        </Flex>

        <PropsTable componentProps={badgePropsAPIDocs} />
        <TypesAugmentation name='Badge' />
        <ClassesTable name='Badge' componentStyles={badgeStyleAPIDocs} />
      </ContentSection>
    </DocsScreenLayout>
  )
}
