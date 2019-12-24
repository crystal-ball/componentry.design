import React from 'react'
import * as componentry from 'componentry' // eslint-disable-line

import { CodeBlock, ComponentHeading, Link } from '@/components/universal'

const { Theme, Media, setupOutlineHandlers, ...componentryComponents } = componentry

// Include all component library components in MDX context for slimmer files
export const components = {
  ...componentryComponents,
  Link,
  ComponentHeading,
  code: CodeBlock,
  pre: props => <div {...props} />,
}
