import { Block, Flex, Text } from 'componentry'

import { ContentSection } from '@/components/Layout/ContentSection'
import { DocsScreenLayout } from '@/components/Layout/DocsScreen'

export default function Spacing() {
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
          <Flex align='center'>
            <Block className='w-10'>0</Block>
            <Block className='bg-primary-900 w-0 h-4 rounded' />
            <Text variant='detail' color='muted' ml={4}>
              (0px)
            </Text>
          </Flex>
          <Flex align='center'>
            <Block className='w-10'>px</Block>
            <Block className='bg-primary-900 w-px h-4 rounded' />
            <Text variant='detail' color='muted' ml={4}>
              (1px)
            </Text>
          </Flex>
          {[
            0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 32, 48, 64,
          ].map((base) => (
            <Flex key={base} align='center'>
              <Block className='w-10'>{base}</Block>
              <Block className={`bg-primary-900 w-${base} h-4 rounded`} />
              <Text variant='detail' color='muted' ml={4}>
                ({base / 4}rem/{base * 4}px)
              </Text>
            </Flex>
          ))}
        </Flex>
      </ContentSection>
    </DocsScreenLayout>
  )
}
