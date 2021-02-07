import { bool, node, oneOf, string } from 'prop-types'
import cx from 'classnames'
import { Block, Flex, useMedia } from 'componentry'

import classes from './screen-container.scss'

export default function SetupScreen({ children, className, docsSpacing, flex, ...rest }) {
  const { sm } = useMedia()
  const Container = flex ? Flex : Block

  const paddingSize = sm ? 'md' : 'xl'
  return (
    <Container
      className={cx(className, { [classes.docsSpacing]: docsSpacing }, 'flex-grow-1')}
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
  docsSpacing: true,
  flex: true,
}

SetupScreen.propTypes = {
  children: node.isRequired,
  className: string,
  direction: oneOf(['column', 'row']),
  docsSpacing: bool,
  flex: bool,
}
