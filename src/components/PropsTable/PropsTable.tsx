import { Table, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import { Fragment } from 'react'
import invariant from 'tiny-invariant'

export function PropsTable({ componentProps }: PropsTableProps) {
  invariant(Array.isArray(componentProps.children), 'Props doc entry missing')
  return (
    <Table>
      <Table.Header>
        <Table.Row className='grid-cols-propsTable'>
          <Table.Head>Name</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {componentProps.children.map((prop) => (
          <Table.Row key={prop.name} alignItems='center' className='grid-cols-propsTable'>
            <Table.Cell>
              <code>{prop.name}</code>
            </Table.Cell>
            <Table.Cell>
              <Text mb={0.5}>{prop.comment.shortText}</Text>
              <code>{createTypeCell(prop.type as PropType)}</code>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

type DocElement = typeof apiDocs.children
type PropsTableProps = {
  componentProps: DocElement[number]
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

function createTypeCell(propType: PropType): JSX.Element | string {
  switch (propType.type) {
    case 'intrinsic':
      return propType.name
    // return <code key={propType.name}>{propType.name}</code>
    case 'literal':
      return `"${propType.value}"`
    // return <code key={propType.value}>"{propType.value}"</code>
    case 'union':
      return (
        <Fragment key='union'>
          {propType.types
            .map(createTypeCell)
            // eslint-disable-next-line react/no-array-index-key
            .map((el, idx) => (idx === 0 ? el : <Fragment key={idx}> | {el}</Fragment>))}
        </Fragment>
      )
    default:
      throw new Error(`Unknown prop: ${propType}`)
  }
}
