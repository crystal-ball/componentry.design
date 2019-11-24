import React from 'react'
import { Active, Flex, Heading, Icon } from 'componentry'
import { css } from '@emotion/core'

import { Link } from '@/components/universal'

const navContainerStyles = ({ borderColors }) => css`
  box-shadow: 0 0 10px ${borderColors.ultra};
  margin-bottom: 10px;
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

export default function Header() {
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
      <div />
      <Heading as='h4' fontColor='primary'>
        Componentry
      </Heading>
      <Active clickEvents>
        {({ deactivate }) => (
          /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
          <>
            <Active.Trigger>
              <Icon id='menu' />
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
