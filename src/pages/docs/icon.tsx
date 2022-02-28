import { Block, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'

import { ClassesLink } from '@/components/ClassesLink/ClassesLink'
import { ClassesTable } from '@/components/ClassesTable/ClassesTable'
import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'
import { PropsTable } from '@/components/PropsTable/PropsTable'

const iconPropsAPIDocs = apiDocs.children.find((entry) => entry.name === 'IconPropsBase')
const iconStyleAPIDocs = apiDocs.children.find((entry) => entry.name === 'IconStyles')

const symbolSprite = `// With an SVG symbol definition
<svg xmlns="http://www.w3.org/2000/svg" style="position: 'absolute'; width: 0; height: 0">
  <symbol id="code" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </symbol>
</svg>

// You can use Icon with the symbol id:
<Icon id="code" />

// Icon will render a use element:
<svg className="C9Y-Icon-base C9Y-Icon-font icon-code" role="img" aria-label="code">
  <use href="#code" />
</svg>`

const elementsMap = `// With SVG elements
const CodeIcon = (
  <svg viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

// Use configureIconElementsMap to setup the Icon id to element mapping:
configureIconElementsMap({
  code: CodeIcon
})

// You can then use Icon with the mapped id:
<Icon id="code" />`

const classes = [
  {
    className: '.C9Y-Icon-base',
    description: 'Base class applied to all variants for shared structural styles',
  },
  {
    className: '.C9Y-Icon-font',
    description: (
      <>
        Variant class applied when <code>variant="font"</code>
      </>
    ),
  },
]

export default function IconDocs() {
  return (
    <DocsScreenLayout>
      <Text variant='h1'>{`<Icon />`}</Text>
      <ContentSection>
        <Text variant='lead' mt={1.5}>
          Icon works with SVG symbol sprites for creating consistent iconography using
          theme values.
        </Text>

        {/* --- USAGE --- */}
        <Text variant='h2'>Usage</Text>

        <Text mt={1}>
          Componentry is a "Bring Your Own Icons" system, and there are two ways to
          include your icons.
        </Text>

        <Text variant='subtitle' mt={1.5}>
          SVG Symbol Sprite
        </Text>

        <Text mt={1}>
          If your SVGs are loaded on the page as SVG symbols you can pass the symbol ID to
          Icon and it will be used for the SVG's <code>href</code>:
        </Text>

        <Block my={2}>
          <CodeBlock code={symbolSprite} language='tsx' />
        </Block>

        <Text variant='subtitle' mt={1.5}>
          SVG elements
        </Text>

        <Text mt={1}>
          If your SVGs are defined inline or imported with a tool like SVGR you can use{' '}
          <code>configureIconElementsMap</code> to create a mapping of IDs to the correct
          SVG elements:
        </Text>

        <Block my={2}>
          <CodeBlock code={elementsMap} language='tsx' />
        </Block>

        <Text variant='h2'>Alignment</Text>

        <Text mt='1'>
          Icons are vertically centered in their containers by default. In flex layouts
          this is accomplished with <code>self-align: center</code>, and outside flex
          layouts this is accomplished with <code>vertical-align: -0.15em</code>.
        </Text>

        <Text italic>
          Note that the negative vertical alignment may need to be adjusted depending on
          your icons and font family.
        </Text>

        <Text variant='h2' display='flex' justifyContent='between' alignItems='end'>
          Styles
          <Text>
            <ClassesLink sources={iconStyleAPIDocs.sources} name='Icon' />
          </Text>
        </Text>

        <Block my={2}>
          <ClassesTable classes={classes} />
        </Block>

        <Text variant='h2'>Props</Text>
        <Block my={2}>
          <PropsTable props={iconPropsAPIDocs.children} />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
