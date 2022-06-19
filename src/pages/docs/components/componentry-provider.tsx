import { Text } from 'componentry'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const simpleExample = `import { ComponentryProvider, createTheme } from 'componentry'

// Create your application theme
const theme = createTheme()

// Create your component default prop overrides
const componentOverrides = {
  Button: { 
    variant: 'outlined'
  }
}

// Connect all components using context provider
<ComponentryProvider theme={theme} components={componentOverrides}>
  <App />
</ComponentryProvider>`

export default function BlockDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<ComponentryProvider />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={3}>
          ComponentryProvider is a React context provider component used to customize the
          theme value returned by useTheme().
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <CodeBlock code={simpleExample} language='tsx' />
      </ContentSection>
    </DocsScreenLayout>
  )
}
