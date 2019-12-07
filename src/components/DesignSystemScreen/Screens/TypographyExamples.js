import React, { useState } from 'react'

import { Anchor, Button, Flex, Text } from 'componentry'

export default function TypographyExamples() {
  const [textColor, updateTextColor] = useState('foreground')

  return (
    <>
      <Flex>
        {[
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
        ].map(color => (
          <Button
            key={color}
            variant='a'
            className='mx-2'
            onClick={() => updateTextColor(color)}
          >
            {color}
          </Button>
        ))}
      </Flex>
      <Text fontColor={textColor}>Radical React Components</Text>
      <Anchor color={textColor} href='#'>
        Radical React Components
      </Anchor>
    </>
  )
}
