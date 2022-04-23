import { Block, Flex, Text, useTheme } from 'componentry'
import { useMemo } from 'react'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'
import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

const spacingRatio = `// theme definition
module.exports.theme = {
  // Convert any arbitrary spacing value to an 8px grid
  spacingRatio: (input) => (input * 8) + 'px'
}

// 7 isn't part of the spacing scale, will be converted to 56px
<Block pt={7}>
  grid support
</Block>`

export default function Spacing() {
  const theme = useTheme()

  const spacingScale = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Use destructuring to pull out spacing scale keys with values
    const { '0': zero, auto, px, ...scale } = theme.spacing

    return [
      'auto',
      '0',
      'px',
      ...Object.keys(scale).sort((a, b) => parseInt(a, 10) - parseInt(b, 10)),
    ]
  }, [theme.spacing])

  return (
    <DocsScreenLayout>
      <ContentSection>
        <Text variant='overline'>Theme customization</Text>
        <Text variant='h1'>Spacing</Text>
        <Text variant='lead'>
          Customizing the default spacing and sizing scale for your project.
        </Text>
        <Text mt={2}>
          Componentry's default spacing scale mirrors the spacing scale used by Tailwind.
          Out of the box this provides a wide set of values for creating cohesive layouts.
        </Text>

        <Flex
          className='pattern-background'
          direction='column'
          fontFamily='mono'
          gap-y='px'
          mt={4}
          p={5}
        >
          {spacingScale.map((base) => {
            let description
            switch (base) {
              case 'auto': {
                description = 'auto'
                break
              }
              case '0': {
                description = '(0px)'
                break
              }
              case 'px': {
                description = '(1px)'
                break
              }
              default: {
                const val = parseInt(base, 10)
                description = `(${val / 4}rem/${val * 4}px)`
              }
            }

            return (
              <Flex key={base} align='center'>
                <Block className='w-10'>{base}</Block>
                <Block className={`bg-primary-900 w-${base} h-4 rounded`} />
                <Text variant='detail' color='muted' ml={4}>
                  {description}
                </Text>
              </Flex>
            )
          })}
        </Flex>

        <Text variant='h2'>Arbitrary values</Text>
        <Text>
          Spacing props also accept arbitrary values. Any value not found in your{' '}
          <code>theme.spacing</code> defintion will be passed through as a style.
        </Text>

        <Text variant='h3'>Spacing ratio</Text>
        <Text>
          When using arbitrary values for spacing it's common to use a ratio to help
          simplify consistent spacing. Componentry provides a{' '}
          <code>theme.spacingRatio</code> definition to support this. It's expected to
          accept any number and return a valid CSS string value.
        </Text>

        <Block my={4}>
          <CodeBlock code={spacingRatio} language='tsx' />
        </Block>
      </ContentSection>
    </DocsScreenLayout>
  )
}
