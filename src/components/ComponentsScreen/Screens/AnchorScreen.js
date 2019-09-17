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

export default function AnchorsScreen() {
  const [textColor, updateTextColor] = useState('null')

  return (
    <Block className='screen'>
      <Text className='lead'>Anchor</Text>
      <Text>This is the anchor component</Text>

      <Header as='h3'>Colors</Header>
      <Flex>
        {colors.map(color => (
          <Button className='mx-2' onClick={() => updateTextColor(color)} key={color}>
            {color}
          </Button>
        ))}
      </Flex>
      <Anchor color={textColor}>Radical React Components</Anchor>
    </Block>
  )
}
