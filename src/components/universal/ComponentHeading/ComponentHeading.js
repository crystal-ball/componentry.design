import React from 'react'
import { string } from 'prop-types'
import { Heading } from 'componentry'

import { css } from '@emotion/core'

const headingStyles = ({ typographyColors, typography }) => css`
  font-family: ${typography.fontFamilyDisplay};
  color: ${typographyColors.radvender};
`

export default function ComponentHeading({ name }) {
  return (
    <Heading className='raddow-1' my='xl' textAlign='right' css={headingStyles}>
      {`<${name}/>`}
    </Heading>
  )
}

ComponentHeading.propTypes = {
  name: string.isRequired,
}
