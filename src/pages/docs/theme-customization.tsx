import { Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function ThemeCustomization(): JSX.Element {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Theme customization
      </Text>
      <Text variant='lead' mt={3}>
        How to customize the base application theme.
      </Text>
    </DocsScreenLayout>
  )
}
