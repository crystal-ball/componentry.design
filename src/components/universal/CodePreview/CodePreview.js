/* eslint-disable react/prop-types */
import { useState } from 'react'
import prettyFormat from 'pretty-format'

// Use context to pass addl props to children?
// language?

export default function ReactCodePreview({
  CodeContainer,
  CodeContainerProps,
  PreviewContainer,
  PreviewContainerProps,
  children,
}) {
  return (
    <>
      <CodeContainer {...CodeContainerProps}>
        {prettyFormat(children, {
          plugins: [prettyFormat.plugins.ReactElement],
        })}
      </CodeContainer>
      <PreviewContainer {...PreviewContainerProps}>{children}</PreviewContainer>
    </>
  )
}

ReactCodePreview.defaultProps = {
  CodeContainer: ({ children, ...rest }) => (
    <pre {...rest}>
      <code>{children}</code>
    </pre>
  ),
  PreviewContainer: (props) => <div {...props} />,
}

export function PreviewPropsContainer({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue)

  return children({ value, setValue })
}
