import React from 'react'
import { Button, Dropdown, Text } from 'componentry'

import {
  CodeBlock,
  CodePreview,
  ComponentHeading,
  PreviewPropsContainer,
} from '@/components/universal'

export default function ButtonScreen() {
  return (
    <>
      <ComponentHeading name='Button' components={['Button']} />
      <Text className='lead'>
        Create meaningful user interaction targets with support for theme, size and
        outline variants.
      </Text>
      <PreviewPropsContainer defaultValue='info'>
        {({ value, setValue }) => (
          <>
            <Dropdown
              Trigger={value}
              onDeactivate={(evt) => setValue(evt?.target?.value ?? 'primary')}
            >
              <Dropdown.Content>
                {['primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(
                  (color) => (
                    <Dropdown.Item key={color} value={color}>
                      {color}
                    </Dropdown.Item>
                  ),
                )}
              </Dropdown.Content>
            </Dropdown>
            <CodePreview CodeContainer={CodeBlock}>
              <Button color={value}>Componentry</Button>
            </CodePreview>
          </>
        )}
      </PreviewPropsContainer>
      <Text>
        The Button component is the default element created by the Active.Trigger
        component, so the Button component API is available for all elements with an
        interaction target.
      </Text>
      <Text>
        Buttons can be customized with theme color, size and outline variants to provide
        the exact styles needed.
      </Text>
      <ul>
        <li>Default button usage expects a theme color</li>
        <li>Outline button variants provide low emphasis action targets.</li>
      </ul>
    </>
  )
}
