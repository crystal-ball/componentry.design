import { Text } from 'componentry'

import { BlogScreenLayout } from '@/components/Layout/BlogScreen'
import { ContentSection } from '@/components/Layout/ContentSection'

export default function Blog() {
  return (
    <BlogScreenLayout>
      <Text variant='h1'>
        Componentry V4.5{' '}
        <span role='img' aria-label='upgrade'>
          🆙
        </span>
      </Text>
      <Text variant='subtitle' mb={4}>
        v4.5.0: Action components
      </Text>
      <ContentSection>
        <Text variant='lead'>
          Componentry v4.5 includes additions and improvements to the library action
          components: Button, IconButton and Link. The new <code>wrapWhenDisabled</code>{' '}
          prop allows creating disabled actions that can still be used with elements that
          require a ref, like Tooltips for explaining disabled states.
        </Text>

        <Text className='mt-3'>V4.4 improvement highlights:</Text>
        <ul className='list-disc list-inside mt-1'>
          <li>Stable release of action components: Button, IconButton, and Link</li>
          <li>
            Added <code>focus-visible</code> pseudo class for action element focus styles
          </li>
          <li>
            New <code>wrapWhenDisabled</code> prop for Button, IconButton, and Link
          </li>
          <li>
            New <code>truncate</code> prop for Text truncation styles
          </li>
        </ul>

        <Text variant='subtitle'>Action components</Text>
        <Text>
          Componentry now has stable support for Button, IconButton, and Link components.
          Action elements are critical to any design system and Componentry provides a set
          that balances automating important accessibility support with component
          transparency.
        </Text>

        <Text>
          Creating library-consistent focused and disabled states was a key question for
          this release. Componentry provides library-consistent implementation of these
          concerns using a <code>:focus-visible</code> pseudo class and a{' '}
          <code>.C9Y-disabled</code> library class. Action components will show a focused
          style for keyboard interactions, and have pointer events disabled by default for
          focused and disabled states respectively.
        </Text>

        <Text>
          In order to allow using wrapping components that require a req (tooltips for
          disabled buttons is a common example pattern) each of the action components
          supports a <code>wrapWhenDisabled</code> prop that will wrap disabled instances
          in a span. This supports refs, as well as custom cursor styles for disabled
          action elements.
        </Text>

        <Text variant='subtitle'>Text truncation</Text>
        <Text>
          The Text component now accepts a <code>truncate</code> boolean prop. When true
          it will include the <code>.truncate</code> className which will include
          Tailwind's text truncation styles for truncating overflowing text with ellipses.
        </Text>
      </ContentSection>
    </BlogScreenLayout>
  )
}
