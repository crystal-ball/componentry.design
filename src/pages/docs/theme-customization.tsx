import { Grid, Link, Text } from 'componentry'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

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

const augment = `// componentry-types.ts
import theme from './path/to/theme'

// Use module augmentation along with provided ThemeOverrides to update the Theme type
declare module 'componentry/types/theme/theme' {
  type CustomTheme = typeof theme
  export interface ThemeOverrides extends CustomTheme {}
}`

const theme = `const theme = {
  screens: {
    lg: '1200px',
  },
  zIndex: {
    auto: 'auto',
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

  backgroundColor: undefined
  borderColor: undefined
  textColor: undefined,

  // --- FLEX/GRID
  flexGrow: { DEFAULT: 1, 0: 0 },
  flexShrink: { DEFAULT: 1, 0: 0 },

  // --- SPACING
  spacing: {
    auto: 'auto',
    px: '1px',
    0: 0,
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
    48: '12rem', // 192px
    64: '16rem', // 256px
  },
  spacingRatio: undefined,

  // --- SIZING
  height: {
    0: 0,
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
  },
  width: {
    0: 0,
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    prose: '65ch',
  },

  // --- TYPOGRAPHY
  fontFamily: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
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
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: 1,
    normal: 1.5,
  },

  // --- BORDERS
  border: {
    DEFAULT: '1px solid #607d8b',
  },
  borderRadius: {
    DEFAULT: '0.25rem', // 4px
    none: '0px',
    full: '9999px',
    sm: '0.125rem', // 2px
    md: '0.375rem', // 6px
    lg: '6px', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
  },
  borderStyle: {
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    hidden: 'hidden',
    none: 'none',
    solid: 'solid',
  },
  borderWidth: {
    0: 0,
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
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
      <Text variant='h1' mt={2}>
        Theme customization
      </Text>
      <ContentSection>
        <Text variant='lead' mt={6}>
          Componentry uses a base theme for generating styles that can be customized to
          match your theme. You can then use that theme throughout your application using
          the <code>useTheme</code> hook and Tailwind's <code>theme()</code> directive.
        </Text>
      </ContentSection>
      {/* --- FILE --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>
            1. Create a <code>componentry.config.js</code>
          </Text>
          <Text mt={2} ml={2}>
            Componentry will merge the values from your config with the library defaults.
          </Text>
        </div>
        <CodeBlock code={config} language='tsx' />
      </Grid>
      {/* --- OVERRIDE --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>2. Override theme values</Text>
          <Text mt={2} ml={2}>
            Setting a theme value will override all the default values, this allows
            constraining the theme values to only the ones you define.
          </Text>
        </div>
        <CodeBlock code={override} language='tsx' />
      </Grid>
      {/* --- EXTENDS --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>3. Extend theme values</Text>
          <Text mt={2} ml={2}>
            Default theme values can be extended using the <code>extend</code> field, this
            allows you to add custom theme values to the Componentry default set.
          </Text>
        </div>
        <CodeBlock code={extend} language='tsx' />
      </Grid>
      {/* --- AUGMENT --- */}
      <Grid width='full' gap={6} mt={12} className='grid-cols-instructions'>
        <div>
          <Text variant='subtitle'>4. Augment types</Text>
          <Text mt={2} ml={2}>
            The componentry <code>Theme</code> type can be customized using{' '}
            <Link href='https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation'>
              module augmentation
            </Link>
            . The simplest way to do this is to use the <code>typeof</code> operator with
            your custom theme values.
          </Text>
        </div>
        <CodeBlock code={augment} language='tsx' />
      </Grid>
      {/* --- DEFAULTS --- */}
      <ContentSection>
        <Text variant='h2'>Theme defaults</Text>
        <Text mb={4}>
          Componentry's default theme shape includes fields for setting z-index, color,
          spacing, and typography values.
        </Text>
        <CodeBlock code={theme} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
