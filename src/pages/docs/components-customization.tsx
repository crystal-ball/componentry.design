import { Grid, Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

const override = `// componentry.config.js
module.exports = {
  components: {
    '.🅲Text-h1': {
      fontSize: '5rem'
    }
  }
}`

const extend = `// componentry.config.js
module.exports = {
  components: {
    '.🅲Text-h1': {
      // Add a style to an existing class
      textTransform: 'uppercase'
    }
    // Or add completely new classes
    '.🅲Text-subtitle': {
      fontSize: '5rem'
    }
  }
}`

const props = `// index.ts
import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from 'componentry'
import App from './App';

const theme = {
  Button: {
    variant: 'outlined'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Theme theme={theme}>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

`

export default function ComponentsCustomization() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Components customization
      </Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Componentry uses PostCSS to enable 100% control over the final component styles
          included in your application.
        </Text>
      </ContentSection>
      {/* --- OVERRIDE --- */}
      <Grid width='full' gap={3} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>1. Override Componentry styles</Text>
          <Text mt={1} ml={1}>
            Any of the Componentry default styles can be overridden by defining a new
            value, for example making
            <code>h1</code> variants have a larger font size.
          </Text>
        </div>
        <CodeBlock code={override} language='tsx' />
      </Grid>
      {/* --- EXTEND --- */}
      <Grid width='full' gap={3} mt={3} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Extend Componentry styles</Text>
          <Text mt={1} ml={1}>
            You can add new styles or classes to any of the components and they will be
            included in the final output.
          </Text>
        </div>
        <CodeBlock code={extend} language='tsx' />
      </Grid>
      {/* --- PROPS --- */}
      <Grid width='full' gap={3} mt={3} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>3. Customize default props</Text>
          <Text mt={1} ml={1}>
            You can override the default props for any component using the{' '}
            <code>Theme</code> component, like defaulting all buttons to the{' '}
            <code>outlined</code> variant.
          </Text>
        </div>
        <CodeBlock code={props} language='tsx' />
      </Grid>
    </DocsScreenLayout>
  )
}
