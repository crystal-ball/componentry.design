import { DocSearch } from '@docsearch/react'
import clsx from 'clsx'
import { Flex, Icon, Link } from 'componentry'
import NextLink from 'next/link'

import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'
import '@docsearch/css'
import classes from './Header.module.css'

const stickyClasses = 'sticky top-0 bg-background border-b-nav shadow-nav'

export default function Header({ isLandingScreen }: HeaderProps) {
  return (
    <Flex
      as='nav'
      className={isLandingScreen ? undefined : stickyClasses}
      justify='space-between'
      py={4}
      px={6}
      align='center'
    >
      {isLandingScreen ? (
        <div />
      ) : (
        <NextLink href='/' passHref>
          <Link className={clsx(classes.logo, 'no-underline font-display')}>
            Componentry
          </Link>
        </NextLink>
      )}

      <Flex align='center' gap={4}>
        <NextLink href='/docs/installation' passHref>
          <Link fontWeight='bold' fontSize='button' pr={2} className='no-underline'>
            Docs
          </Link>
        </NextLink>
        <NextLink href='/blog' passHref>
          <Link fontWeight='bold' fontSize='button' pr={2} className='no-underline'>
            Blog
          </Link>
        </NextLink>

        <div className={classes.searchSizer}>
          <DocSearch
            appId='GLQ9FXJ6Z9'
            indexName='componentry'
            apiKey='829c66c6429b0e6c4e5aef0559057e0a'
          />
        </div>

        <ColorSchemeToggle />

        <Link href='https://github.com/crystal-ball/componentry'>
          <Icon id='github' className={classes.github} />
        </Link>
      </Flex>
    </Flex>
  )
}

type HeaderProps = {
  isLandingScreen?: boolean
}
