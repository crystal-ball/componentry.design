import React from 'react'
import { Text } from 'componentry'

import { ComponentHeading } from '@/components/universal'

export default function ThemeScreen() {
  return (
    <>
      <ComponentHeading name='Theme' components={['Theme']} />
      <Text className='lead'>Set component prop defaults for an entire application</Text>

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
              <code>theme</code>
            </td>
            <td>
              <code>Object</code>
            </td>
            <td>Application components prop defaults</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
