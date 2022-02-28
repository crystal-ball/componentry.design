import { Table } from 'componentry'

export function ClassesTable({
  classes,
}: {
  classes: Array<{ className: string; description: React.ReactNode }>
}) {
  return (
    <Table>
      <Table.Header>
        <Table.Row className='grid-cols-classesTable'>
          <Table.Head>Class</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {classes.map(({ className, description }) => (
          <Table.Row key={className} className='grid-cols-classesTable'>
            <Table.Cell>
              <code>{className}</code>
            </Table.Cell>
            <Table.Cell>{description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
