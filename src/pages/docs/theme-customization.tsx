import { Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function ThemeCustomization() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Theme customization
      </Text>
      <Text variant='lead' mt={3}>
        Componentry uses a base theme for generating styles that can be customized to
        match your theme. You can then use that theme throughout your application using
        the <code>useTheme</code> hook and Tailwind's <code>theme()</code> directive.
      </Text>
      <Text variant='h2'>Theme Configuration</Text>
      1. Theme is configured in <code>componentry.config.js</code>
      2. Default theme shape
    </DocsScreenLayout>
  )
}
