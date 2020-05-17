import React from 'react'
import { Text } from 'componentry'

import {
  CodeBlock,
  CodePreview,
  ComponentHeading,
  PreviewPropsContainer,
} from '@/components/universal'

/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
export default function TextScreen() {
  return (
    <>
      <ComponentHeading name='Text' components={['Text']} />
      <Text className='lead'>
        Text makes creating consistent typography elements easy
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
              <Text inline={value}>
                God help us, we&apos;re in the hands of engineers. So you two dig up, dig
                up dinosaurs? Must go faster... Yeah, but your scientists were so
                preoccupied with whether or not they could, they didn&apos;t stop to think
                if they should.
              </Text>
            </CodePreview>
          </>
        )}
      </PreviewPropsContainer>

      <Text variant='heading-2'>Style maps</Text>

      <CodeBlock className='language-scss'>
        {`
          $text: (
            variants: (
              heading-1: (),
              heading-2: (),
              heading-3: (),
              body: (
                '& + &': ()
              ),
            )
          )`}
      </CodeBlock>

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
              <code>bold</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Truthy values will render bold text</td>
          </tr>

          <tr>
            <td>
              <code>inline</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Truthy values will render a `span` element</td>
          </tr>

          <tr>
            <td>
              <code>italic</code>
            </td>
            <td>
              <code>boolean</code>
            </td>
            <td>Truthy values will render italic text</td>
          </tr>
        </tbody>
      </table>

      <Text variant='heading-2'>DOM elements</Text>
      <Text>
        The DOM element used for each variant can be configured with the `Theme`
      </Text>

      <CodeBlock className='language-jsx'>
        {`<Theme theme={{ Text: { variantsElements: { body: 'div' }}}}>
          <App />
        </Theme>`}
      </CodeBlock>
    </>
  )
}
