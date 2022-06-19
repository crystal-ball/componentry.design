import { Link, Text } from 'componentry'
import NextLink from 'next/link'

import { CodeBlock } from '@/components/CodeBlock/CodeBlock'

export function TypesAugmentation({ name }: TypesAugmentationProps) {
  return (
    <>
      <Text variant='h2' mt={4}>
        TypeScript customization
      </Text>
      <Text>
        You can use module augmentation to customize the TypeScript types for any of{' '}
        {name}'s props:
      </Text>
      <CodeBlock
        code={`declare module 'componentry/types/components/${name}/${name}' {
  interface ${name}PropsOverrides {
    // ... overwrite any types for ${name} props ...
  }
}`}
        language='tsx'
      />
      <Text italic>
        See the{' '}
        <NextLink href='/docs/typescript' passHref>
          <Link>TypeScript guide</Link>
        </NextLink>{' '}
        for more information.
      </Text>
    </>
  )
}

type TypesAugmentationProps = {
  name: string
}
