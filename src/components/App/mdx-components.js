/* eslint-disable react/no-multi-comp */
import React from 'react'
import * as componentry from 'componentry' // eslint-disable-line

import { CodeBlock, ComponentHeading, Link } from '@/components/universal'

const {
  Heading,
  Theme,
  Media,
  setupOutlineHandlers,
  ...componentryComponents
} = componentry

// Include all component library components in MDX context for slimmer files
export const components = {
  ...componentryComponents,
  Heading,
  Link,
  ComponentHeading,
  code: CodeBlock,
  pre: (props) => <div {...props} />,
  h1: (props) => <Heading variant='heading-1' {...props} />,
  h2: (props) => <Heading variant='heading-2' {...props} />,
  h3: (props) => <Heading variant='heading-3' {...props} />,
  h4: (props) => <Heading variant='heading-4' {...props} />,
}
