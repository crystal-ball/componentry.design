import { Text } from 'componentry'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function Block() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>Block</Text>
      <Text variant='lead'>
        Block is a convenience component for creating block layouts
      </Text>
    </DocsScreenLayout>
  )
}
