import { Text } from 'componentry'

import { CodeBlock, ComponentHeading } from '@/components/universal'

export default function IconScreen() {
  return (
    <>
      <ComponentHeading name='Icon' components={['Icon']} />
      <Text className='lead'>Component for in document SVGs with `use`</Text>

      <Text>
        The Icon component creates SVG elements with the passed <code>id</code> set as the
        SVG <code>use</code> value. This is a convenient way to handle font icons with an
        SVG sprite.
      </Text>

      <Text variant='heading-2'>Style maps</Text>

      <CodeBlock className='language-scss'>
        {`
          $icon: (
            variants: (
              font: ()
            )
          )`}
      </CodeBlock>
    </>
  )
}
