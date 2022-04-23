import { Grid, Text } from 'componentry'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const postcssConfig = `{
  "plugins": [require("componentry/postcss"), require("autoprefixer")]
}`

const directives = `/* The "components" param will include all component styles */
@componentry foundation;

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

export default function Installation() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={2}>
        Installation
      </Text>

      <ContentSection>
        <Text variant='lead' mt={6}>
          Install componentry and import the styles. Componentry uses PostCSS to convert
          custom <code>@componentry</code> directives to CSS.
        </Text>
      </ContentSection>

      {/* --- NPM --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>1. Install Componentry and PostCSS</Text>
        </div>
        <CodeBlock code='npm install componentry postcss autoprefixer' />
      </Grid>

      {/* --- FOUNDATION --- */}
      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Add Componentry to your PostCSS config</Text>
          <Text mt={2} ml={2}>
            Include Componentry's PostCSS plugin in your config. The plugin converts the
            <code>@componentry</code> directives into styles.
          </Text>
        </div>
        <CodeBlock code={postcssConfig} language='tsx' />
      </Grid>

      {/* --- DIRECTIVES --- */}
      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>3. Add directives to your CSS</Text>
          <Text mt={2} ml={2}>
            The <code>foundation</code> directive is converted to the base styles, and the{' '}
            <code>components</code>
            directive is converted to the component styles.
          </Text>
        </div>
        <CodeBlock code={directives} language='css' />
      </Grid>

      {/* --- DIRECTIVES --- */}
      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>4. Build something radical</Text>
          <Text mt={2} ml={2}>
            You're ready to start using Componentry.
          </Text>
        </div>
        <CodeBlock code={gettingStarted} language='tsx' />
      </Grid>
    </DocsScreenLayout>
  )
}
