import React from 'react'
import { arrayOf, string } from 'prop-types'
import { css } from '@emotion/core'
import { Anchor, Block, Heading, Icon, Text } from 'componentry'

const headingStyles = ({ typographyColors, typography }) => css`
  font-family: ${typography.fontFamilyDisplay};
  color: ${typographyColors.radvender};
`

export default function ComponentHeading({ components, name }) {
  return (
    <>
      <Heading className='raddow-1' mt='xl' mb={0} css={headingStyles} letterSpacing={0}>
        {`<${name}/>`}
      </Heading>
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
