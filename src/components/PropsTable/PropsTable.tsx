import { Table, Text } from 'componentry'
import apiDocs from 'componentry/api-docs'
import invariant from 'tiny-invariant'

export function PropsTable({ componentProps }: PropsTableProps) {
  invariant(Array.isArray(componentProps.children), 'Props doc entry missing')
  return (
    <>
      <Text variant='h2' mt={4}>
        Props
      </Text>
      <Table>
        <Table.Header>
          <Table.Row className='grid-cols-propsTable'>
            <Table.Head>Name</Table.Head>
            <Table.Head>Description</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {componentProps.children.map((prop) => (
            <Table.Row
              key={prop.name}
              alignItems='center'
              className='grid-cols-propsTable'
            >
              <Table.Cell>
                <code>{prop.name}</code>
              </Table.Cell>
              <Table.Cell>
                <Text mb={1}>{prop.comment?.shortText}</Text>
                <code>{createTypeCell(prop.type as PropType)}</code>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
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
      type: 'reference'
      name: string
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
    case 'reference':
      return propType.name
    case 'intrinsic':
      return propType.name
    case 'literal':
      return `"${propType.value}"`
    case 'union':
      return propType.types.map(createTypeCell).join(' | ')
    default:
      throw new Error(`Unknown prop: ${propType}`)
  }
}
