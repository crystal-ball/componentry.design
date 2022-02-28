import { Icon, Link } from 'componentry'
import invariant from 'tiny-invariant'

export function ClassesLink({ name, sources }: ClassesLinkProps) {
  const source = sources[0]
  invariant(source, `Missing API docs source for ${name}`)

  const { fileName } = source
  return (
    <Link
      href={`https://github.com/crystal-ball/componentry/blob/main/src/${fileName}`}
      className='flex items-center leading-none'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon id='github' className='inline-block' />
      {name} styles
    </Link>
  )
}

type ClassesLinkProps = {
  name: string
  sources: Array<{ fileName: string }>
}
