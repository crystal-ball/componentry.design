import { Flex, Link, Text } from 'componentry'
import NextLink from 'next/link'

import { Icon } from '@/components/Icon/Icon'

export default function Header({ isLandingScreen }: HeaderProps) {
  return (
    <Flex as='nav' justify='between' p={2} align='center' borderBottom>
      {isLandingScreen ? (
        <div />
      ) : (
        <NextLink href='/' passHref>
          <Text variant='h3'>
            <Link className='no-underline font-display'>Componentry</Link>
          </Text>
        </NextLink>
      )}

      <Flex align='center' gap={2}>
        <NextLink href='/docs/installation' passHref>
          <Link fontWeight='bold' className='no-underline'>
            Docs
          </Link>
        </NextLink>
        <NextLink href='/blog' passHref>
          <Link fontWeight='bold' className='no-underline'>
            Blog
          </Link>
        </NextLink>
        <Link href='https://github.com/crystal-ball/componentry'>
          <Icon id='github' width={24} height={24} color='link' />
        </Link>
      </Flex>
    </Flex>
  )
}

type HeaderProps = {
  isLandingScreen?: boolean
}
