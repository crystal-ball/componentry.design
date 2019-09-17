import React, { useState } from 'react'
import { Anchor, Block, Button, Flex, Header, Text } from 'componentry'

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

export default function TypographyScreen() {
  const [textColor, updateTextColor] = useState('foreground')
  return (
    <Block className='screen'>
      <Text className='lead'>Typography styles</Text>
      <Header as='h3'>Colors</Header>
      <Flex>
        {colors.map(color => (
          <Button
            anchor
            className='mx-2'
            onClick={() => updateTextColor(color)}
            key={color}
          >
            {color}
          </Button>
        ))}
      </Flex>
      <Text color={textColor}>Radical React Components</Text>
      <Anchor color={textColor}>React Components</Anchor>

      <Header as='h3'>Display</Header>
      <Header className='display-1'>Radical</Header>
      <Header className='display-2'>Radical</Header>
      <Header className='display-3'>Radical</Header>
      <Header className='display-4'>Radical</Header>

      <div className='test-color-fn'>Color fn test</div>
    </Block>
  )
}
