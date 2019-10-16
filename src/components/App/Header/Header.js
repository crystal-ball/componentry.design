import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Anchor, Block, Flex, Heading, Text, useVisible } from 'componentry'
import { css } from '@emotion/core'
import MobileNavDrawer from './MobileNavDrawer/MobileNavDrawer'

const logoHeaderStyles = ({ fontColors }) => css`
  color: ${fontColors.header};
  line-height: 1;
  font-size: 30px;
  text-decoration: underline;
  letter-spacing: 0;
  background: #492d54;
  border-radius: 4px;
  padding: 3px 13px 8px;
`

export default function AppHeader() {
  const location = useLocation()

  // Header shows a different hero/logo depending on if the landing screen is active
  const showHero = location.pathname === '/'
  const [navActive, updateNavActive] = useState(false)

  // TODO: WANT A USEROUTER HOOK SO BAD!

  // Generate timed active/visible values for css property animations
  const { active, visible } = useVisible(navActive)

  return (
    <>
      {/* App hero shown on the landing screen */}
      {showHero && (
        <Flex
          direction='column'
          align='center'
          justify='between'
          className='py-5 px-3 border-mito bg-ultra'
        >
          <Heading textAlign='center'>Componentry</Heading>
          <Text className='lead mb-0' color='muted'>
            Radical React Components
          </Text>
        </Flex>
      )}
      {/* Sticky nav header shows on all pages */}
      <Block className='mb-4 bg-ultra'>
        {!showHero && (
          <Flex justify='center' className='mt-3'>
            <Anchor as={Link} to='/' css={logoHeaderStyles}>
              C
            </Anchor>
          </Flex>
        )}
        <Flex as='nav' justify='around' align='center' className='px-4 py-3 border-mito'>
          {/* Setup links */}
          <Anchor
            as='button'
            onClick={() => {
              updateNavActive(!navActive)
            }}
          >
            Setup
          </Anchor>
          <Anchor as='button'>Styles</Anchor>
          <Anchor as='button'>Components</Anchor>
        </Flex>
      </Block>
      <MobileNavDrawer
        active={active}
        visible={visible}
        closeNav={() => updateNavActive(false)}
      />
    </>
  )
}
