import { Flex, Icon, Link, Text } from 'componentry'
import NextLink from 'next/link'

import classes from './Header.module.css'

const stickyClasses =
  'sticky top-0 bg-background border-0 border-b border-solid border-container'

export default function Header({ isLandingScreen }: HeaderProps) {
  return (
    <Flex
      as='nav'
      className={isLandingScreen ? undefined : stickyClasses}
      justify='space-between'
      p={4}
      align='center'
    >
      {isLandingScreen ? (
        <div />
      ) : (
        <Text variant='h3'>
          <NextLink href='/' passHref>
            <Link className='no-underline font-display'>Componentry</Link>
          </NextLink>
        </Text>
      )}

      <Flex align='center' gap={4}>
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
          <Icon id='github' color='link' className={classes.github} />
        </Link>
      </Flex>
    </Flex>
  )
}

type HeaderProps = {
  isLandingScreen?: boolean
}
