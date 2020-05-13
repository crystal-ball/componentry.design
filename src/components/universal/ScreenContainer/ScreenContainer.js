import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'
import cx from 'classnames'
import { Block, Flex, useMedia } from 'componentry'

export default function SetupScreen({ children, className, flex, ...rest }) {
  const { sm } = useMedia()
  const Container = flex ? Flex : Block

  const paddingSize = sm ? 'md' : 'xl'
  return (
    <Container
      className={cx(className, 'flex-grow-1')}
      pr={paddingSize}
      pl={paddingSize}
      {...rest}
    >
      {children}
    </Container>
  )
}

SetupScreen.defaultProps = {
  className: '',
  direction: 'column',
  flex: true,
}

SetupScreen.propTypes = {
  children: node.isRequired,
  className: string,
  direction: oneOf(['column', 'row']),
  flex: bool,
}
