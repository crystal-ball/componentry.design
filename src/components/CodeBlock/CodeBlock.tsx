import { toH } from 'hast-to-hyperscript'
import { createElement } from 'react'
import css from 'refractor/lang/css'
import tsx from 'refractor/lang/tsx'
import { refractor } from 'refractor/lib/core'

refractor.register(css)
refractor.register(tsx)

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  let contents
  if (language) {
    contents = toH(createElement, refractor.highlight(code, language))
  } else {
    contents = code
  }

  return (
    <pre className={`CodeBlock language-${language ?? 'none'} rounded-lg`}>
      <code>{contents}</code>
    </pre>
  )
}
type CodeBlockProps = {
  code: string
  language?: 'css' | 'shell' | 'tsx'
}
