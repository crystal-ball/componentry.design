import { Flex, Link } from 'componentry'

import Github from '@/media/github.svg'

export default function Header(): JSX.Element {
  return (
    <Flex as='nav' justify='end' p='lg'>
      <Link href='https://github.com/crystal-ball/componentry'>
        <Github width={48} height={48} />
      </Link>
    </Flex>
  )
}
