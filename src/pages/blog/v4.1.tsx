import { Text } from 'componentry'

import { BlogScreenLayout } from '@/components/Layout/BlogScreen'
import { ContentSection } from '@/components/Layout/ContentSection'

export default function Blog() {
  return (
    <BlogScreenLayout>
      <Text variant='h1'>
        Componentry V4.1{' '}
        <span role='img' aria-label='upgrade'>
          🆙
        </span>
      </Text>
      <Text variant='subtitle' mb={4}>
        v4.1.0: Utilities Upgrades
      </Text>
      <ContentSection>
        <Text variant='lead'>
          Componentry V4.1 upgrades the library utility prop API. The entire set of
          resources for utility props has been consolidated, improved, and made available
          outside the library.
        </Text>

        <Text className='mt-3'>V4.1 improvement highlights:</Text>
        <ul className='list-disc list-inside mt-1'>
          <li>Transforming utility props to utility classes is 15x-50x faster</li>
          <li>Adds support for arbitrary values in utility props</li>
          <li>
            New utility props: borderRadius, boxShadow, flexGrow, flexShrink, zIndex
          </li>
          <li>
            Consolidates border utility API and provides a Tailwind plugin for border
            styles
          </li>
          <li>
            Adds a Theme type for TS users and a createTheme fn to simplify theme creation
          </li>
          <li>
            Adds a ComponentryProvider context provider for accessing theme in components
          </li>
        </ul>

        <Text variant='subtitle'>Utility props performance</Text>
        <Text>
          Transformation of utility props to utility classes is 15x-50x faster depending
          on the number of utility props used by a component. This was actually a simple
          update in the library to use a switch statement to assemble classes instead of
          using clsx to generate them.
        </Text>
        <Text>
          Even though it was a simple update the impact is huge, components now have an
          even smaller runtime overhead than before. For a component tree with 1500
          components, the additional time to mount, and to rerender are ~10ms and ~15ms
          compared to a simple component using a static className.
        </Text>
        <Text>
          This means that Componentry components like Block, Flex, and Text can be used to
          create consistent layouts and typography with an almost-nothing performance
          impact.
        </Text>

        <Text variant='subtitle'>Theming upgrades</Text>
        <Text>
          Utilities related to application theming are now more available and more
          configurable. A new utility, <code>createTheme</code> provides the same
          mechanism for merging theme customizations with Componentry defaults as
          previously provided, now with control over when that occurs.
        </Text>
        <Text>
          Explicitly creating the theme allows using the new <code>ThemeProvider</code>{' '}
          context component along with the <code>useTheme</code> hook to create a single
          theme used by the PostCSS styles plugin and application components.
        </Text>
        <Text>
          For the created theme a new type, <code>Theme</code>, is available. Module
          augmentation is supported with <code>Theme</code> to enable TS users to work
          with a type safe theme API.
        </Text>
      </ContentSection>
    </BlogScreenLayout>
  )
}
