import React from 'react'
import { string } from 'prop-types'
import { Heading } from 'componentry'

import { css } from '@emotion/core'

const headingStyles = ({ typographyColors, typography }) => css`
  font-family: ${typography.fontFamilyDisplay};
  color: ${typographyColors.radvender};
  letter-spacing: 8px;
  text-align: left;
  margin-top: 80px;
`

export default function ComponentHeading({ name }) {
  return <Heading className='raddow-1' css={headingStyles}>{`<${name}/>`}</Heading>
}

ComponentHeading.propTypes = {
  name: string.isRequired,
}
