import { Table } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

export function ClassesTable({ componentStyles }: ClassesTableProps) {
  invariant(Array.isArray(componentStyles.children), 'Props doc entry missing')

  return (
    <Table>
      <Table.Header>
        <Table.Row className='grid-cols-classesTable'>
          <Table.Head>Class</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {componentStyles.children.map(({ name, comment }) => (
          <Table.Row key={name} className='grid-cols-classesTable'>
            <Table.Cell>
              <code>{name}</code>
            </Table.Cell>
            <Table.Cell>{comment.shortText}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

type DocElement = typeof apiDocs.children
type ClassesTableProps = {
  componentStyles: DocElement[number]
}
