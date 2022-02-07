import { Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function ComponentsCustomization() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Components customization
      </Text>
      <Text variant='lead' mt={3}>
        Component styles can be overridden thanks to PostCSS by creating a styles object
        and passing it to your Componentry configuration.
      </Text>
      <Text variant='h2'>Style overrides</Text>
      1. Styles are configured in <code>componentry.config.js</code>
      2. No reloading yet
      <Text variant='h2'>Prop overrides</Text>
      1. Default props can be overridden with the <code>ThemeProvider</code>
    </DocsScreenLayout>
  )
}
