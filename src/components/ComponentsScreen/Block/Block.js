import React from 'react'
import { Block, Text } from 'componentry'

import {
  CodeBlock,
  CodePreview,
  ComponentHeading,
  PreviewPropsContainer,
} from '@/components/universal'

export default function BlockScreen() {
  return (
    <>
      <ComponentHeading name='Block' components={['Block']} />
      <Text className='lead'>
        Convenience component for building layouts with System props.
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
              <Block inline={value} className='demo-div'>
                Block component
              </Block>
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
              <code>inline</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Truthy values will render a div with `inline-block` for `display`</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
