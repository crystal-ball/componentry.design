import { Grid, Text } from 'componentry'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

const config = `// componentry.config.js
module.exports = {
  theme: {},
}`

const override = `// componentry.config.js
module.exports = {
  theme: {
    colors: {
      link: '#7d77ff'
    }
  },
}
`

const extend = `// componentry.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        link: '#7d77ff'
      }
    }
  },
}`

const theme = `const theme = {
  zIndex: {
    modal: 10,
  },
  // --- COLORS
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    background: '#fff',
    inverse: '#eff',
    gray: {
      100: '#eff2f3',
      200: '#d7dfe2',
      // ...
    },
    primary: {
      100: '#f2f1ff',
      200: '#dfddff',
      // ...
    },
    info: {
      100: '#dbeafe',
      200: '#bfdbfe',
      // ...
    },
    success: {
      100: '#f4f9ed',
      200: '#e4f1d2',
      // ...
    },
    warning: {
      100: '#fdf8ec',
      200: '#fbedcf',
      // ...
    },
    error: {
      100: '#fbeeed',
      200: '#f6d4d3',
      // ...
    },
  },

  // --- SPACING
  spacing: {
    0: 0,
    0.5: '0.25rem', // 4px
    1: '0.5rem', // 8px
    1.5: '0.75rem', // 12px
    2: '1rem', // 16px
    3: '1.5rem', // 24px
    4: '2rem', // 32px
    5: '2.5rem', // 40px
    6: '3rem', // 48px
  },

  // --- TYPOGRAPHY
  fontFamily: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    monospace: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSize: {
    base: '1rem', // HTML base size
    small: '0.875rem',
    large: '1.25rem',
    h1: '3rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    normal: 1.5,
  },

  // --- BORDERS
  borderWidth: {
    DEFAULT: '1px',
  },
  borderColor: {
    DEFAULT: '#607d8b',
  },
  borderRadius: {
    DEFAULT: '4px',
    sm: '2px',
    md: '4px',
    lg: '6px',
  },

  // --- SHADOWS
  boxShadow: {
    DEFAULT: '0 0.5rem 1rem rgba(73, 80, 87, 0.15)',
  },
}`

export default function ThemeCustomization() {
  return (
    <DocsScreenLayout>
      <Text variant='overline'>Getting started</Text>
      <Text variant='h1' mt={1}>
        Theme customization
      </Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          Componentry uses a base theme for generating styles that can be customized to
          match your theme. You can then use that theme throughout your application using
          the <code>useTheme</code> hook and Tailwind's <code>theme()</code> directive.
        </Text>
      </ContentSection>
      {/* --- FILE --- */}
      <Grid width='full' gap={3} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>
            1. Create a <code>componentry.config.js</code>
          </Text>
          <Text mt={1} ml={1}>
            Componentry will merge the values from your config with the library defaults.
          </Text>
        </div>
        <CodeBlock code={config} language='tsx' />
      </Grid>
      {/* --- OVERRIDE --- */}
      <Grid width='full' gap={3} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Override theme values</Text>
          <Text mt={1} ml={1}>
            Setting a theme value will override all the default values, this allows
            constraining the theme values to only the ones you define.
          </Text>
        </div>
        <CodeBlock code={override} language='tsx' />
      </Grid>
      {/* --- EXTENDS --- */}
      <Grid width='full' gap={3} mt={6} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Extend theme values</Text>
          <Text mt={1} ml={1}>
            Default theme values can be extended using the <code>extend</code> field, this
            allows you to add custom theme values to the Componentry default set.
          </Text>
        </div>
        <CodeBlock code={extend} language='tsx' />
      </Grid>
      {/* --- DEFAULTS --- */}
      <ContentSection>
        <Text variant='h2'>Theme defaults</Text>
        <Text mb={2}>
          Componentry's default theme shape includes fields for setting z-index, color,
          spacing, and typography values.
        </Text>
        <CodeBlock code={theme} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
