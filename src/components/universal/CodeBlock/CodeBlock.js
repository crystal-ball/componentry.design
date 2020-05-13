/* eslint-disable react/no-array-index-key */

import React from 'react'
import { node, string } from 'prop-types'
import cx from 'classnames'
import Highlight, { defaultProps } from 'prism-react-renderer'

// https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component
export default function CodeBlock({ children, className: mdxClassName }) {
  const language = mdxClassName.replace(/language-/, '') || 'javascript'
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={null}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx('border border-mito border-radius p-md', className)}>
          {tokens.map((line, i) => {
            // It seems like every codeblock ends with an empty line, which
            // looks bad so skip rendering them
            if (line[0].empty) return null
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
CodeBlock.displayName = 'CodeBlock'

CodeBlock.defaultProps = {
  className: '',
}

CodeBlock.propTypes = {
  children: node.isRequired,
  className: string,
}
