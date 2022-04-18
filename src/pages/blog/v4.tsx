import { Link, Text } from 'componentry'
import NextLink from 'next/link'

import { BlogScreenLayout } from '@/components/Layout/BlogScreen'
import { ContentSection } from '@/components/Layout/ContentSection'

export default function Blog() {
  return (
    <BlogScreenLayout>
      <Text variant='h1'>
        Componentry V4{' '}
        <span role='img' aria-label='tada'>
          🎉🎉🎉
        </span>
      </Text>
      <Text variant='subtitle' mb={4}>
        v4.0.0: Positively PostCSS
      </Text>
      <ContentSection>
        <Text variant='lead'>
          Componentry V4 enables a significantly upgraded workflow for customizing styles
          by using PostCSS instead of SASS for styles processing.
        </Text>

        <Text className='mt-3'>V4 improvement highlights:</Text>
        <ul className='list-disc list-inside mt-1'>
          <li>Library styles migrated to PostCSS</li>
          <li>TailwindCSS compatibility for utility classes</li>
        </ul>

        <Text variant='subtitle'>PostCSS Enhancements</Text>
        <Text>
          Componentry styles are now fully customizeable, and easily overrideable thanks
          to PostCSS. Starting in V3 Componentry styles were intended to be 100%
          overrideable to provide the complete control needed for custom design systems,
          but this required defining your overrides in unwieldy SASS maps. Under the hood
          Componentry would merge the SASS maps from users with the library defaults, and
          then use the merged maps to generate the final styles. PostCSS greatly improves
          this workflow by allowing all definitions to be defined using JS style object
          syntax. This is a much easier format to work with, and is a common pattern in
          modern applications.
        </Text>

        <Text variant='subtitle'>TailwindCSS compatibility</Text>
        <Text>
          Utility classes are a key resource in Componentry, providing the flexible "in
          place" overrides that make a design system scalable and delightful to work with.
          In V3 Componentry had a limited set of utility classes, but was lacking an
          adequately robust set. Recognizing that creating a utility class system, is a
          very tricky, and very solved problem, Componentry V4 aims to provide excellent
          compatibility with other utility class systems instead of rolling our own.
          Tailwind is the first system that Componentry integrates closely with. This
          means you can now easily use Componentry and and Tailwind together for a truly
          turbocharged workflow.
        </Text>

        <Text variant='h2'>V3 Migration</Text>
        <Text>V4 includes the following breaking changes:</Text>
        <ul className='list-disc list-inside mt-1'>
          <li>Library utility props only accept theme values</li>
          <li>Library utility classes require Tailwind integration</li>
          <li>Library styles are migrated from SASS to PostCSS</li>
        </ul>

        <Text variant='subtitle'>Utility props only accept theme values</Text>
        <Text>
          For the V4 release any value passed to utility props will be directly used as a
          utility class. This is a breaking change from V3 which attempted to set
          non-theme values as inline styles. If you rely on this behavior you can wait
          until the V4.1 release to migrate, where it will be re-introduced.
        </Text>

        <Text variant='subtitle'>Utility classes setup</Text>
        <Text>
          Utility class styles are no longer included in Componentry itself. Creating a
          robust utility class system is a solved problem, and instead of re-inventing the
          wheel Componentry is focusing on providing great compatibility with other
          solutions. V4 includes support for using Tailwind as your utility classes system
          solution, see the{' '}
          <NextLink href='/docs/tailwind-integration' passHref>
            <Link>Tailwind Integration</Link>
          </NextLink>{' '}
          docs for details.
        </Text>

        <Text variant='subtitle'>Styles are migrated from SASS to PostCSS</Text>
        <Text>
          To migrate from SASS, convert your theme and any component override styles into
          JS files and pass them to the Componentry PostCSS plugin as detailed in the{' '}
          <NextLink href='/docs/theme-customization' passHref>
            <Link>Theme Customization</Link>
          </NextLink>
          and{' '}
          <NextLink href='/docs/components-customization' passHref>
            <Link>Components Customization</Link>
          </NextLink>{' '}
          docs.
        </Text>
      </ContentSection>
    </BlogScreenLayout>
  )
}
