import { Table } from 'componentry'

export function PropsTable({ props }: PropsTableProps) {
  return (
    <Table>
      <Table.Header>
        <Table.Row className='grid-cols-propsTable'>
          <Table.Head>Name</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.map((prop) => (
          <Table.Row key={prop.name} className='grid-cols-propsTable'>
            <Table.Cell>
              <code>{prop.name}</code>
            </Table.Cell>
            <Table.Cell>{createTypeCell(prop.type)}</Table.Cell>
            <Table.Cell>{prop.comment.shortText}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

type PropsTableProps = {
  props: Array<{
    name: string
    comment: {
      shortText: string
    }
    flags: {
      isOptional: boolean
    }
    type: PropType
  }>
}

type PropType =
  | {
      type: 'intrinsic'
      name: string
    }
  | {
      type: 'literal'
      value: string
    }
  | {
      type: 'union'
      types: Array<{
        type: 'literal'
        value: string
      }>
    }

function createTypeCell(propType: PropType): JSX.Element {
  switch (propType.type) {
    case 'intrinsic':
      return <code>{propType.name}</code>
    case 'literal':
      return <code>"{propType.value}"</code>
    case 'union':
      return (
        <>
          {propType.types
            .map(createTypeCell)
            .map((el, idx) => (idx === 0 ? el : <> | {el}</>))}
        </>
      )
    default:
      throw new Error(`Unknown prop: ${propType}`)
  }
}
