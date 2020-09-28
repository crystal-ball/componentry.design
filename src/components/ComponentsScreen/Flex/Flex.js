import React from 'react'
import { Flex, Text } from 'componentry'

import {
  CodeBlock,
  CodePreview,
  ComponentHeading,
  PreviewPropsContainer,
} from '@/components/universal'

export default function FlexScreen() {
  return (
    <>
      <ComponentHeading name='Flex' components={['Flex']} />
      <Text className='lead'>
        Convenience component for building flex layouts with System props.
      </Text>

      <PreviewPropsContainer defaultValue={false}>
        {({ value, setValue }) => (
          <>
            <label>
              <input
                type='checkbox'
                checked={value}
                onChange={() => {
                  setValue(!value)
                }}
              />{' '}
              inline
            </label>

            <CodePreview CodeContainer={CodeBlock}>
              <Flex inline={value} className='demo-div'>
                Flex component
              </Flex>
            </CodePreview>
          </>
        )}
      </PreviewPropsContainer>

      <Text variant='heading-2'>Props</Text>

      <table className='table'>
        <thead>
          <tr>
            <td>Prop</td>
            <td>Type</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>align</code>
            </td>
            <td>
              <code>start, end, center, baseline, stretch</code>
            </td>
            <td>Sets an `align-items` style</td>
          </tr>

          <tr>
            <td>
              <code>direction</code>
            </td>
            <td>
              <code>column, column-reverse, row, row-reverse</code>
            </td>
            <td>Sets a `flex-direction style</td>
          </tr>

          <tr>
            <td>
              <code>inline</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Truthy values will render a div with `inline-flex` for `display`</td>
          </tr>

          <tr>
            <td>
              <code>justify</code>
            </td>
            <td>
              <code>start, end, center, around, between, evenly</code>
            </td>
            <td>Sets a `justify-content` style</td>
          </tr>

          <tr>
            <td>
              <code>wrap</code>
            </td>
            <td>
              <code>wrap, wrap-reverse, nowrap</code>
            </td>
            <td>Sets a `flex-wrap` style</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
