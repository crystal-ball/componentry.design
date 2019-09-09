import React from 'react'
import { Anchor, Block, Header, Text } from 'componentry'

const HomeScreen = () => (
  <div className='d-flex w-100 justify-content-center'>
    <Block className='w-60' mt={150}>
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

      <Header as='h1'>Radical React Components</Header>
      <Header as='h2'>Radical React Components</Header>
      <Header as='h3'>Radical React Components</Header>
      <Header as='h4'>Radical React Components</Header>
      <Header as='h5'>Radical React Components</Header>
    </Block>
  </div>
)

export default HomeScreen
