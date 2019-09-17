import React from 'react'
import { shape, string } from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { Anchor, Block, Button, Dropdown, Flex, Header, Icon, Text } from 'componentry'
import { css } from '@emotion/core'

const logoHeaderStyles = ({ typographyColors }) => css`
  color: ${typographyColors.header};
  line-height: 1;
  font-size: 30px;
  text-decoration: underline;
  letter-spacing: 0;
  background: #492d54;
  border-radius: 4px;
  padding: 3px 13px 8px;
`

function AppHeader({ location }) {
  // Header shows a different hero/logo depending on if the landing screen is active
  const showHero = location.pathname === '/'

  // TODO: WANT A USEROUTER HOOK SO BAD!

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
          <Header textAlign='center'>Componentry</Header>
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
        <Flex as='nav' justify='between' align='center' className='px-4 py-3 border-mito'>
          {/* Setup links */}
          <Dropdown Trigger='Setup'>
            <Dropdown.Content>
              <Dropdown.Item as={Link} to='/setup/design-system'>
                Design System
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>

          {/* Styles links */}
          <Dropdown Trigger='Styles'>
            <Dropdown.Content>
              <Dropdown.Item as={Link} to='/styles/typography'>
                Typography
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>

          {/* Components links */}
          <Dropdown Trigger='Components'>
            <Dropdown.Content>
              <Dropdown.Item as={Link} to='/components/anchor'>
                Anchor
              </Dropdown.Item>
              <Dropdown.Item as={Link} to='/components/flex'>
                Flex
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
          <Button anchor>
            <Icon id='navigation-more' />
          </Button>
        </Flex>
      </Block>
    </>
  )
}

AppHeader.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}

export default withRouter(AppHeader)
