import React from 'react'
import { bool, func } from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Block, Flex } from 'componentry'
import { css } from '@emotion/core'

const navDrawerContainer = ({ backgroundColors }) => css`
  background: ${backgroundColors.overlay};
  opacity: 0;
  transition: opacity 300ms;

  &.visible {
    opacity: 1;
  }
`

const navDrawer = ({ backgroundColors, borderColors }) => css`
  position: absolute;
  min-width: 250px;
  width: 70%;
  height: 100%;
  background: ${backgroundColors.ultra};
  border-right: 2px solid ${borderColors.mito};
  transition: transform 300ms;
  transform: translateX(-100%);

  &.visible {
    transform: translateX(0);
  }
`

export default function MobileNavDrawer({ active, visible, closeNav }) {
  return (
    <div
      className={classnames('screen-overlay', { visible })}
      onClick={closeNav}
      aria-hidden={String(!active)}
      role='presentation'
      tabIndex='-1'
      css={navDrawerContainer}
    >
      <Block
        className={classnames({ visible })}
        css={navDrawer}
        aria-hidden={String(!active)}
      >
        <Flex direction='column'>
          <div>
            <h3>Setup</h3>
          </div>
          <Flex direction='column'>
            {/* Setup */}
            <Link to='/setup/design-system'>Design system</Link>

            {/* Styles */}
            <Link to='/styles/typography'>Typography</Link>

            {/* Components */}
            <Link to='/components/anchor'>Anchor</Link>
            <Link to='/components/flex'>Flex</Link>
          </Flex>
        </Flex>
        Nav Drawer
      </Block>
    </div>
  )
}

MobileNavDrawer.propTypes = {
  active: bool.isRequired,
  closeNav: func.isRequired,
  visible: bool.isRequired,
}
