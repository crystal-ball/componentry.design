import React from 'react'
import { useLocation } from 'react-router-dom'
import { Active, Flex, Heading, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'

const navContainerStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
`

const contentContainerStyles = ({ borderColors }) => css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background: rgba(17, 15, 22, 0.9);
  border-left: 5px solid ${borderColors.mito};
  z-index: 1;
`

const menuOffsetStyles = css`
  display: block;
  width: 20px;
  height: 25px;
`

export default function Header() {
  const location = useLocation()
  const renderLandingLink = location.pathname !== '/'

  return (
    <Flex
      as='nav'
      background='ultra'
      justify='between'
      align='center'
      borderBottom
      borderColor='ultra'
      py='sm'
      px='base'
      css={navContainerStyles}
    >
      <div css={menuOffsetStyles}>&nbsp;</div>
      {renderLandingLink && (
        <Heading as='h4' fontColor='primary' className='line-height-1'>
          Componentry
        </Heading>
      )}
      <Active clickEvents>
        {({ deactivate }) => (
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          <>
            <Active.Trigger>
              <Icon id='menu' className='h4' />
            </Active.Trigger>
            <Active.Content p='base' css={contentContainerStyles}>
              <div onClick={deactivate}>
                <Link to='/'>Home</Link>
              </div>
              <div onClick={deactivate}>
                <Link to='/setup'>Setup</Link>
              </div>
              <div onClick={deactivate}>
                <Link to='/design-system'>Design System</Link>
              </div>
              <div onClick={deactivate}>
                <Link to='/components'>Components</Link>
              </div>
            </Active.Content>
          </>
        )}
      </Active>
    </Flex>
  )
}
