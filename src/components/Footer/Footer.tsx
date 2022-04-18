import { Flex, Text } from 'componentry'

export function Footer() {
  return (
    <Flex as='footer' justify='center' p={3}>
      <Text>
        <a href='https://vercel.com/?utm_source=crystal-ball&utm_campaign=oss'>
          ▲ Powered by Vercel
        </a>{' '}
        | Made with magic
      </Text>
    </Flex>
  )
}
