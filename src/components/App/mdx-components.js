import { Text } from 'componentry'

import { CodeBlock } from '@/components/universal'

// Include all component library components in MDX context for slimmer files
export const components = {
  code: CodeBlock,
  pre: (props) => <div {...props} />,
  h1: (props) => <Text variant='heading-1' {...props} />,
  h2: (props) => <Text variant='heading-2' {...props} />,
  h3: (props) => <Text variant='heading-3' {...props} />,
  p: (props) => <Text {...props} />,
  inlineCode: (props) => <Text variant='code' {...props} />,
}
