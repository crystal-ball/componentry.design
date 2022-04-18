import { Block, Flex, Text, useTheme } from 'componentry'
import { useMemo } from 'react'

import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function Spacing() {
  const theme = useTheme()

  const spacingScale = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Use destructuring to pull out spacing scale keys with values
    const { '0': zero, px, ...scale } = theme.spacing

    return [
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

        {/* TODO: TS and augmentation overrides */}

        <Flex
          className='pattern-background'
          direction='column'
          fontFamily='mono'
          gap-y='px'
          mt={4}
          p={5}
        >
          {spacingScale.map((base) => {
            const numValue = base === 'px' ? 1 : Number.parseFloat(base)

            let description
            if (base === '0') description = '(0px)'
            else if (base === 'px') description = '(1px)'
            else description = `(${numValue / 4}rem/${numValue * 4}px)`

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
      </ContentSection>
    </DocsScreenLayout>
  )
}
