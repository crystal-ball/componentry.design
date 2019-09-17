import React from 'react'
import { Anchor, Button, Block, Flex, Header, Text, useMedia } from 'componentry'

export default function LandingScreen() {
  const { sm } = useMedia()
  const headerText = sm ? 'Componentry' : 'Radical React Components'

  return (
    <div className='screen d-flex w-100 justify-content-center'>
      <Block style={{ maxWidth: 1200 }} mt={150} mb={50}>
        <Header textAlign='center'>
          Componentry{' '}
          <span role='img' aria-label='docs'>
            📝
          </span>
        </Header>
        <Text>Radical React Components</Text>
        <Text>
          <Anchor href='https://github.com/crystal-ball/componentry'>Github repo</Anchor>
        </Text>

        <Header as='h1'>{headerText}</Header>
        <Header as='h2'>{headerText}</Header>
        <Header as='h3'>{headerText}</Header>
        <Header as='h4'>{headerText}</Header>
        <Header as='h5'>{headerText}</Header>

        <Button color='primary'>Radical</Button>

        <Header as='h5'>Spacing</Header>
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
