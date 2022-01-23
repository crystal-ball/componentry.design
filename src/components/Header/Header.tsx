import { Flex, Link } from 'componentry'

import { Icon } from '@/components/Icon/Icon'

export default function Header(): JSX.Element {
  return (
    <Flex as='nav' justify='end' p={3}>
      <Link href='https://github.com/crystal-ball/componentry'>
        <Icon id='github' width={48} height={48} />
      </Link>
    </Flex>
  )
}
