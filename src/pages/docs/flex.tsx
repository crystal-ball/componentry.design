import { Text } from 'componentry'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function Block() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>Flex</Text>
      <Text variant='lead'>
        Flex is a convenience component for creating flex layouts
      </Text>
    </DocsScreenLayout>
  )
}
