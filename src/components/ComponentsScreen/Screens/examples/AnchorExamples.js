import React, { useState } from 'react'
import { Anchor, Button, Flex } from 'componentry'

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'foreground',
  'background',
  'muted',
  'header',
  'anchor',
]

export default function AnchorExamples() {
  const [textColor, updateTextColor] = useState('null')

  return (
    <>
      <Flex>
        {colors.map(color => (
          <Button key={color} className='mx-2' onClick={() => updateTextColor(color)}>
            {color}
          </Button>
        ))}
      </Flex>
      <Anchor color={textColor}>Radical React Components</Anchor>
    </>
  )
}
