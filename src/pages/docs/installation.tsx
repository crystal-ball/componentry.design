import React from 'react'
import { Flex, Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

const postcssConfig = `{
  "plugins": ["componentry/postcss", "autoprefixer"]
}`

const directives = `/* The "components" param will include all component styles */
@componentry components;

/* Or each component style can be selectively included */
@componentry Alert;
@componentry Badge;
@componentry Button;
/* ... */
`

const gettingStarted = `import { Flex, Text } from 'componentry'

export const GettingStarted = () => {
  return (
    <Flex>  
      <Text variant="h1">Radical</Text>
    </Flex>
  )
}
`

export default function Installation(): JSX.Element {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Installation
      </Text>
      <Text variant='lead' mt={3}>
        Install componentry and import the styles with PostCSS
      </Text>
      <Text variant='h3'>Install Componentry and PostCSS</Text>
      <CodeBlock code='npm install componentry postcss autoprefixer' />

      <Text variant='h3'>Add Componentry to your PostCSS config</Text>
      <CodeBlock code={postcssConfig} language='tsx' />

      <Text variant='h3'>Add the Componentry component directives to your CSS</Text>
      <CodeBlock code={directives} language='css' />

      <Text variant='h3'>Build something radical</Text>
      <CodeBlock code={gettingStarted} language='tsx' />
    </DocsScreenLayout>
  )
}
