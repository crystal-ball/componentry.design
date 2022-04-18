import { Grid, Text } from 'componentry'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const theming = `// tailwind.config.js
const theme = require('./src/theme/theme')

module.exports = {
  theme,
  content: ['./src/**/*.{js,jsx,ts,tsx}']
}`

const preflight = `// tailwind.config.js
const theme = require('./src/theme/theme')

module.exports = {
  theme,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
}`

const safelist = `// tailwind.config.js
const theme = require('./src/theme/theme')

module.exports = {
  theme,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/componentry/types/utils/tailwind-safelist.d.ts',
  ],
  corePlugins: {
    preflight: false,
  },
}`

const postcssConfig = `// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-nested'),
    require('componentry/postcss'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
`

export default function TailwindIntegration() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={2}>
        Tailwind Integration
      </Text>

      <ContentSection>
        <Text variant='lead' mt={6}>
          Componentry is designed to integrate closely with Tailwind. All componentry
          utility props map to Tailwind classes.
        </Text>
      </ContentSection>

      {/* --- THEME --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>1. Use the same theme object</Text>
          <Text mt={2} ml={2}>
            Componentry uses the same theme shape as Tailwind, so you can define your
            theme once and use it for both configs.
          </Text>
        </div>
        <CodeBlock code={theming} language='tsx' />
      </Grid>

      {/* --- FOUNDATION --- */}
      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Opt out of Tailwind base styles</Text>
          <Text mt={2} ml={2}>
            If you included the Componentry base styles with{' '}
            <code>@componentry foundation;</code> in your app styles you can opt out of
            Tailwind's similar setup styles with the <code>preflight</code> value.
          </Text>
        </div>
        <CodeBlock code={preflight} language='tsx' />
      </Grid>

      {/* --- SAFELIST --- */}
      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>3. Safelist utility classes</Text>
          <Text mt={2} ml={2}>
            Componentry provides shorthand utility props that map to Tailwind utility
            classes, but Tailwind doesn't see this usage so it won't include these
            classes. The easiest way to work around this is to safelist the classes you'll
            use.
          </Text>
          <Text mt={2} ml={2}>
            Componentry also provides a file for matching all of the default utility
            classes except for: margin, padding, gap, background-color, border-color, and
            text color.
          </Text>
        </div>
        <CodeBlock code={safelist} language='tsx' />
      </Grid>

      <Grid width='full' gap={6} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>4. Optional nesting support</Text>
          <Text mt={2} ml={2}>
            If you want to support nesting in your CSS dont' use{' '}
            <code>tailwind/nesting</code>, it will break Componentry, instead use{' '}
            <code>postcss-nested</code>.
          </Text>
        </div>
        <CodeBlock code={postcssConfig} language='tsx' />
      </Grid>
    </DocsScreenLayout>
  )
}
