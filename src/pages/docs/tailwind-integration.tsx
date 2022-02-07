import { Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function TailwindIntegration() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Tailwind Integration
      </Text>
      <Text variant='lead' mt={3}>
        How to integrate Componentry and Tailwind.
      </Text>
      1. Componentry theme shape matches Tailwind theme shape, you can use it for both
      :easy: 2. Tailwind won't match utility classes from Componentry utility props, have
      to safelist them.
    </DocsScreenLayout>
  )
}
