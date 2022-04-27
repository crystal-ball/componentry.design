import { Text } from 'componentry'

import { BlogScreenLayout } from '@/components/Layout/BlogScreen'
import { ContentSection } from '@/components/Layout/ContentSection'

export default function Blog() {
  return (
    <BlogScreenLayout>
      <Text variant='h1'>
        Componentry V4.4{' '}
        <span role='img' aria-label='upgrade'>
          🆙
        </span>
      </Text>
      <Text variant='subtitle' mb={4}>
        v4.4.0: Setup Simplifications
      </Text>
      <ContentSection>
        <Text variant='lead'>
          Componentry V4.4 includes a few small improvements to the library setup
          workflow. Notably: utility prop types align with custom themes "out of the box",
          and safelisting classes for Tailwind is now managed.
        </Text>

        <Text className='mt-3'>V4.1 improvement highlights:</Text>
        <ul className='list-disc list-inside mt-1'>
          <li>Default utility props are derived from the Theme type.</li>
          <li>Managed solution for safe-listing Tailwind classes added.</li>
          <li>Component types display improved for IntelliSense.</li>
          <li>PostCSS dependencies moved to peerDependencies</li>
        </ul>

        <Text variant='subtitle'>Derived utility props</Text>
        <Text>Previously setup of custom theme values for TS users meant:</Text>
        <ol className='list-decimal list-inside mt-1'>
          <li>Defining a custom theme value</li>
          <li>
            Using module augmentation to override the <code>Theme</code> type
          </li>
          <li>Using module augmentation to override the utility prop types to match</li>
        </ol>

        <Text mt={2}>
          In this release the type for utility props are now derived from the{' '}
          <code>Theme</code> type. Most of the time this means TS users can create a
          custom theme, use module augmentation to update the <code>Theme</code> type, and
          they're ready.{' '}
          <span className='italic'>
            (For special cases it's still possible to directly override the utility prop
            types using module augmentation)
          </span>
        </Text>

        <Text variant='subtitle'>Managed Tailwind safe-list</Text>
        <Text>
          Previously integrating with Tailwind for utility props required including a
          bundled type definition with a set of static string values in a projects{' '}
          <code>content</code> list. Not only was this a bit odd, but it meant that any
          custom theme values had to also be safe-listed manually.
        </Text>
        <Text>
          Starting in this release Componentry provides a <code>tailwindSafelist</code>{' '}
          export for integrating with Tailwind. The export includes all of the patterns
          needed to include the Tailwind classes used by Componentry.
        </Text>
      </ContentSection>
    </BlogScreenLayout>
  )
}
