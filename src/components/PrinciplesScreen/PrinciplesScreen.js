import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ScreenContainer } from '@/components/universal'
import AccessibilityScreen from './screens/accessibility.mdx'
import APIDesignScreen from './screens/api-design.mdx'
import LibraryPrinciplesScreen from './screens/library-principles.mdx'

export default function PrinciplesScreen() {
  return (
    <ScreenContainer>
      <Switch>
        <Route
          path='/principles/library-principles'
          component={LibraryPrinciplesScreen}
        />
        <Route path='/principles/api-design' component={APIDesignScreen} />
        <Route path='/principles/accessibility' component={AccessibilityScreen} />
      </Switch>
    </ScreenContainer>
  )
}

/**
 * PRINCIPLES NOTES
 *
 * 1. Componentry enables building a design system that you need. Each app is
 *   different, and the use of `variant` to distinguish between styles and
 *   behaviors means that you're able to create whatever variants you need. Eg.
 *   you could create a `chart-axis-label` Typography variant
 * 2. Components are opt-in. Especially Block, Flex, and Typography which are
 *   just wrappers for lib util classes. This enables using "the metal" directly
 *   when needed, like html and classes for tables with lots of items.
 * 3. You can override every style. By using SASS maps you don't have to
 *   sacrifice the ability to fine tune the default variant styles. This makes
 *   getting started easy and simplifies theming concerns.
 *
 * RECOMMENDED LANGUAGE
 *
 * Prefer using `primary` and secondary` for variants, they're very easy to evolve
 * over time and can be consistently used for almost all elements. Eg, a primary
 * border, a primary theme color, a primary button variant, etc.
 *
 * - primary, secondary, accent
 *
 * BOOTSTRAP LEARNINGS - THEME OVER VARIABLES
 *
 * The Bootstrap variables file shows how the system strains to scale to many
 * design systems. Because you can't customize everything there is a very large
 * number of variables to override that then get used in the styles. This works
 * well for styles close to Bootstrap, but struggles for more fine-grained
 * customization and usually requires override classNames.
 *
 * MATERIAL UI LEARNINGS - ENABLE CUSTOM VARIANTS
 *
 * PREFER PROPER HTML
 *
 * If there is more semantic HTML for an element, that is the supported form.
 * This is mostly important for user inputs like a button group.
 */
