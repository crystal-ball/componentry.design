/* eslint-disable react/no-multi-comp */
import React from 'react'
import * as componentry from 'componentry' // eslint-disable-line

import { CodeBlock, ComponentHeading, Link } from '@/components/universal'

const { Text, Theme, Media, setupOutlineHandlers, ...componentryComponents } = componentry

// Include all component library components in MDX context for slimmer files
export const components = {
  ...componentryComponents,
  Text,
  Link,
  ComponentHeading,
  code: CodeBlock,
  pre: (props) => <div {...props} />,
  h1: (props) => <Text variant='heading-1' {...props} />,
  h2: (props) => <Text variant='heading-2' {...props} />,
  h3: (props) => <Text variant='heading-3' {...props} />,
  p: (props) => <Text {...props} />,
}
