import React from 'react'
import { string } from 'prop-types'
import { Heading } from 'componentry'

import { css } from '@emotion/core'

const headingStyles = ({ fontColors, typography }) => css`
  font-family: ${typography.fontFamilyDisplay};
  color: ${fontColors.component};
  letter-spacing: 8px;
  text-align: right;
`

export default function ComponentHeading({ name }) {
  return <Heading css={headingStyles}>{`<${name}/>`}</Heading>
}

ComponentHeading.propTypes = {
  name: string.isRequired,
}
