import React from 'react'
import { arrayOf, string } from 'prop-types'
import { Anchor, Block, Icon, Text } from 'componentry'

import classes from './component-heading.scss'

export default function ComponentHeading({ components, name }) {
  return (
    <>
      <Text
        variant='display-2'
        className={classes.heading}
        mt='xl'
        mb={0}
        letterSpacing={0}
      >
        {`<${name}/>`}
      </Text>
      <Block ml={75}>
        <Text variant='caption' mb={0}>
          Components: {components.join(', ')}
        </Text>
        <Text variant='caption'>
          <Anchor
            fontSize='sm'
            target='_blank'
            rel='noopener'
            href={`https://github.com/crystal-ball/componentry/blob/master/src/${name}/${name}.js`}
          >
            <Icon id='github' mr='xs' />
            Source
          </Anchor>
        </Text>
      </Block>
    </>
  )
}

ComponentHeading.propTypes = {
  components: arrayOf(string).isRequired,
  name: string.isRequired,
}
