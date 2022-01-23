import { Flex, Link, Text } from 'componentry'
import NextLink from 'next/link'

import { Icon } from '@/components/Icon/Icon'

export default function Header(): JSX.Element {
  return (
    <Flex as='nav' justify='between' p={2} align='center' borderBottom>
      <NextLink href='/' passHref>
        <Text variant='h3'>
          <Link className='no-underline'>Componentry</Link>
        </Text>
      </NextLink>
      <Flex align='center' gap={2}>
        <NextLink href='/docs/installation' passHref>
          <Link fontWeight='bold' className='no-underline'>
            Docs
          </Link>
        </NextLink>
        <NextLink href='/blog' passHref>
          <Link bold className='no-underline'>
            Blog
          </Link>
        </NextLink>
        <Link href='https://github.com/crystal-ball/componentry'>
          <Icon id='github' width={24} height={24} />
        </Link>
      </Flex>
    </Flex>
  )
}
