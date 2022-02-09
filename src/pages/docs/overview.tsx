import { Link, Text } from 'componentry'
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
          Finding a solution that supports all the requirements ultimately needed by most
          design systems has always been difficult. There are usually some hard trade-offs
          to make that are unique to each application when choosing a library/framework.
          Before looking at the goals of Componentry let's look more closely at some of
          the common difficulties faced working with design system solutions.
        </Text>
        {/* --- SECTION  */}
        <Text variant='h3'>Customization</Text>
        <Text>
          If your application has it's own flair/brand then customization of any default
          styles is extremely important.
        </Text>
        <Text>
          This problem can be most apparent when using CSS frameworks that expose
          SASS/LESS variables for customizing styles. Not every style can be overridden
          this way which can lead to layering of overrides that is difficult to track.
        </Text>
        <Text>
          Ideally a solution allows 100% customization of the "base" styles so that the
          boundary between design system and feature styles is crisp.
        </Text>
        <Text variant='h3'>Consistency</Text>
        <Text>
          If your team isn't using your system's resources consistently your application
          experience begins to diverge.This introduces a natural friction between
          providing flexibility with constraints.
        </Text>
        <Text>
          This problem can be most apparent when using utility frameworks that provide
          utility classes for all of your theme values. While this is extremely convenient
          for overrides, it also means that each engineer is responsible for correctly
          using the right utilities in the right ways.
        </Text>
        <Text>
          Without constraints it's difficult to work in alignment on a constantly evolving
          system.
        </Text>
        <Text variant='h3'>Performance</Text>
        <Text>
          Using components for all of your application elements can make consistency easy
          by providing the guardrails that make it clear how to work in your system. But
          using components for every single element in a screen can have performance
          overhead.
        </Text>
        <Text>
          This problem can be most apparent using CSS in JS libraries. They provide 100%
          customizable base styles, and utility props that can accept any value at
          runtime, but with enough components rendered there can start to be a slight lag.
        </Text>
        <Text>
          Additionally these libraries can quickly add significant weight to bundle size,
          requiring large amounts of JS fetched over the wire, parsed, and then executed.
        </Text>
        <Text>
          Ideally a solution has minimal impact on bundle size and as little runtime
          overhead as possible to keep your application{' '}
          <span className='italic'>FAST</span>.
        </Text>
        {/* --- SECTION  */}
        <Text variant='h2'>Componentry</Text>
        <Text>
          Componentry styles are 100% customizable thanks to some magic from PostCSS.
          You're able to define style overrides as an object and can change or remove any
          line of CSS in the library.
        </Text>
        <Text>
          The component focus of the library enables creating flexible, but clear
          constraints on your design system to drive consistency across all your features.
          Native TypeScript support enables further improving this alignment.
        </Text>
        <Text>
          A close integration with Tailwind provides the ability to quickly create
          features by composing a set of well structured design system elements, adjusted
          to the specific needs with utility classes.
        </Text>
        <Text>
          Finally on the performance front Componentry is a very small, less thank 10Kb
          across the wire zipped, with no runtime CSS overhead. Experimental support
          exists for compiling presentational components down to HTML elements with CSS
          classes, getting you "closer to the metal".
        </Text>
        <Text>
          Componentry focuses on a few fundamental trade-offs common to most design system
          solutions:
        </Text>
        <Text>
          Componentry is a React component library designed specifically for building
          highly performant, completely customizable design systems.
        </Text>
      </ContentSection>
    </DocsScreenLayout>
  )
}
