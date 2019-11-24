/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Anchor, Block, Button, Flex, Heading, Text } from 'componentry'

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
    <Block>
      <Heading>Theme customization</Heading>
      <p className='lead'>
        Yes, Yes, without the oops! You know what? It is beets. I've crashed into a beet
        truck. My dad once told me, laugh and the world laughs with you.
      </p>
      <p>
        Yes, Yes, <strong>without</strong> the oops! You know what? It is beets. I've
        crashed into a beet truck. My dad once told me, laugh and the world laughs with
        you, Cry, and I'll give you something to cry about you little bastard! I gave it a
        cold? I gave it a virus. A computer virus.
      </p>

      <p>
        Remind me to thank John for a lovely weekend. My dad once told me, laugh and the
        world laughs with you, Cry, and I'll give you something to cry about you little
        bastard! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates
        don’t eat the tourists.
      </p>

      <Heading as='h3'>Jeffsum Ipsum</Heading>

      <p>
        Just my luck, no ice. You really think you can fly that thing? Hey, you know how
        I'm, like, always trying to save the planet? Here's my chance. You know what? It
        is beets. I've crashed into a beet truck. So you two dig up, dig up dinosaurs?
        Checkmate...
      </p>

      <h2>Radical Components</h2>
      <p>
        Jaguar shark! So tell me - does it really exist? God help us, we're in the hands
        of engineers. We gotta burn the rain forest, dump toxic waste, pollute the air,
        and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't
        want it anymore!
      </p>

      <Heading as='h4'>Minor details here</Heading>
      <p>
        You're a very talented young man, with your own clever thoughts and ideas. Do you
        need a manager? You really think you can fly that thing? Did he just throw my cat
        out of the window? Hey, you know how I'm, like, always trying to save the planet?
        Here's my chance.
      </p>

      <Heading>Tooltips</Heading>

      <p>
        You're a very talented young man, with your own clever thoughts and ideas. Do you
        need a manager? You really think you can fly that thing? Did he just throw my cat
        out of the window? Hey, you know how I'm, like, always trying to save the planet?
        Here's my chance.
      </p>

      <Text className='lead'>Typography styles</Text>
      <Heading as='h3'>Colors</Heading>
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

      <Heading as='h2'>Headings</Heading>
      <Heading as='h1'>Headings</Heading>
      <Heading as='h2'>Headings</Heading>
      <Heading as='h3'>Headings</Heading>
      <Heading as='h4'>Headings</Heading>

      <Heading as='h3'>Display</Heading>
      <Heading className='display-1'>Radical</Heading>
      <Heading className='display-2'>Radical</Heading>
      <Heading className='display-3'>Radical</Heading>
      <Heading className='display-4'>Radical</Heading>

      <div className='test-color-fn'>Color fn test</div>
    </Block>
  )
}
