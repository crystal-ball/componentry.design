import { Block, Link, Text } from 'componentry'
import NextLink from 'next/link'

import { DocsScreenLayout } from '@/components/Layout/DocsScreen'
import { ContentSection } from '@/components/Layout/ContentSection'

export default function Overview() {
  return (
    <DocsScreenLayout>
      <ContentSection>
        <Text variant='overline'>Getting started</Text>
        <Text variant='h1'>Overview</Text>
        <Text variant='lead'>
          Welcome to the Componentry docs{' '}
          <span role='img' aria-label='hello wave'>
            👋
          </span>{' '}
        </Text>
        <Text variant='lead'>
          This overview provides an introduction to Componentry by reviewing the problems
          it's focused on solving. If you're ready to dive in and start hacking you can{' '}
          <NextLink href='/docs/installation' passHref>
            <Link>skip ahead to Installation</Link>
          </NextLink>
          .
        </Text>
        {/* --- SECTION  */}
        <Text variant='h2'>
          THE problem: Building design systems is <span className='italic'>hard</span>
        </Text>
        <Text>
          Your design system defines the visual language of your application, translating
          visual patterns into user intent. Consistency and control of the components your
          system provides is crucial to building a delightful user experience.
        </Text>
        <Text>
          Your application (and therefore it's design system) also never stop changing.
          New features necessitate new patterns and every now and then a company re-brand
          comes along...{' '}
          <span role='img' aria-label='being silly'>
            😜
          </span>
        </Text>
        <Text>
          Typically you want to have a flexible system to allow evolving your application,
          <span className='italic'>but</span> you also want a sensible set of constraints
          in place to make consistency easy, <span className='italic'>and</span> you need
          the entire solution to be performant.
        </Text>
        <Text>
          Componentry aims to provide 100% customization of your design system styles,
          using a shared theme, with flexible overrides using utility classes - while
          staying maximally performant.
        </Text>

        {/* --- SECTION  */}
        <Text variant='h3'>Customization</Text>
        <Text>
          Componentry styles are 100% customizeable thanks to PostCSS. Styles are
          generated by merging the library defaults with your overrides, providing a crisp
          base of styles to develop on top of.
        </Text>
        <Text>
          Using PostCSS for style processing is a key strategy for performance. Library
          styles have no runtime overhead, and there's no bundle weight. This keeps
          Componentry "close to the metal" and keeps your application fast.
        </Text>

        <Text variant='h3'>Consistency</Text>
        <Text>
          Componentry styles are create using your theme values, and that theme can be
          customized to match your application's conventions. Adding semantic namespaces
          and theme values enables your codebase to provide helpful hints for how and
          where to use theme values.
        </Text>
        <Text>
          Providing flexibility in theme definitions, while also supporting theme
          constraints allows Componentry to help reduce friction across teams trying to
          maintain stylistic consistency.
        </Text>

        <Text variant='h3'>Performance</Text>
        <Text>
          Performance is a key priority in Componentry, including bundle size and runtime
          overhead. Staying as close to "native" HTML and CSS is a key part of this
          strategy. Componentry works with the browser, maximizing performance and keeping
          bundle size very small.
        </Text>

        <Text>
          Using CSS classes also means that many Componentry components are just wrappers
          that manage providing the correct set of classes for each component instance.
          This strategy opens the door for some very exciting optimizations pre-compiling
          components during build time. The result is the fastest possible component - no
          component at all.
        </Text>

        <Block mt={12}>
          <Text variant='subtitle'>
            <NextLink href='/docs/installation' passHref>
              <Link>Next: Installation</Link>
            </NextLink>
          </Text>
        </Block>
        {/* --- SECTION  */}
      </ContentSection>
    </DocsScreenLayout>
  )
}
