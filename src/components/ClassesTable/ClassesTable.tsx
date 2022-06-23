import { Icon, Link, Table, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

export function ClassesTable({ componentStyles, name }: ClassesTableProps) {
  const source = componentStyles.sources[0]

  invariant(Array.isArray(componentStyles.children), 'Props doc entry missing')
  invariant(source, `Missing API docs source for ${name}`)

  return (
    <>
      <Text
        variant='h2'
        display='flex'
        justifyContent='space-between'
        alignItems='end'
        mt={4}
      >
        Styling
        <Link
          href={`https://github.com/crystal-ball/componentry/blob/main/src/${source.fileName}`}
          className='flex items-center leading-none text-md'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icon id='github' className='inline-block' />
          {name} styles
        </Link>
      </Text>
      <Table>
        <Table.Header>
          <Table.Row className='grid-cols-classesTable'>
            <Table.Head>Class</Table.Head>
            <Table.Head>Description</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {componentStyles.children.map((style) => (
            <Table.Row key={name} className='grid-cols-classesTable'>
              <Table.Cell>
                <code>{style.name}</code>
              </Table.Cell>
              {/* @ts-expect-error -- Comment isn't getting inferred correctly... */}
              <Table.Cell>{style.comment?.shortText}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

type DocElement = typeof apiDocs.children
type ClassesTableProps = {
  componentStyles: DocElement[number]
  name: string
}
