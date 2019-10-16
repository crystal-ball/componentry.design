import React from 'react'
import { Anchor, Button, Block, Flex, Heading, Text, useMedia } from 'componentry'

export default function LandingScreen() {
  const { sm } = useMedia()
  const headerText = sm ? 'Componentry' : 'Radical React Components'

  return (
    <div className='screen d-flex w-100 justify-content-center'>
      <Block style={{ maxWidth: 1200 }} mt={150} mb={50}>
        <Heading textAlign='center'>
          Componentry{' '}
          <span role='img' aria-label='docs'>
            📝
          </span>
        </Heading>
        <Text>Radical React Components</Text>
        <Text>
          <Anchor href='https://github.com/crystal-ball/componentry'>Github repo</Anchor>
        </Text>

        <Heading as='h1'>{headerText}</Heading>
        <Heading as='h2'>{headerText}</Heading>
        <Heading as='h3'>{headerText}</Heading>
        <Heading as='h4'>{headerText}</Heading>
        <Heading as='h5'>{headerText}</Heading>

        <Button color='primary'>Radical</Button>

        <Heading as='h5'>Spacing</Heading>
        <Flex>
          <div>
            <Block bg='success' className='pl-5 pt-5 mr-1' />
          </div>
          <div>
            <Block bg='success' className='pl-4 pt-4 mr-1' />
          </div>
          <div>
            <Block bg='success' className='pl-3 pt-3 mr-1' />
          </div>
          <div>
            <Block bg='success' className='pl-2 pt-2 mr-1' />
          </div>
          <div>
            <Block bg='success' className='pl-1 pt-1 mr-1' />
          </div>
        </Flex>
      </Block>
    </div>
  )
}
