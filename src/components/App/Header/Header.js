import React from 'react'
import { shape, string } from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { Flex, Header } from 'componentry'
import { css } from '@emotion/core'

// List of screens that should not have the shared application header rendered
const suppressHeaderLocations = ['/']

const smallStyles = ({ grays }) => css`
  color: ${grays['600']};
  font-size: 60%;
`

const linkStyles = css`
  text-decoration: none;
  color: inherit;
`

function AppHeader({ location }) {
  // When the app is on a route that should not show the header bail out on
  // a render value
  if (suppressHeaderLocations.includes(location.pathname)) return null

  return (
    <Flex
      as='header'
      className='py-3 border-mito mb-4 px-3'
      align='center'
      justify='between'
    >
      <Link to='/' css={linkStyles}>
        <Header as='h2' className='mb-0'>
          C<small css={smallStyles}>omponentry</small>
        </Header>
      </Link>
    </Flex>
  )
}

AppHeader.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}

export default withRouter(AppHeader)
