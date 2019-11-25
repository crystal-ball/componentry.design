import React from 'react'
import { node } from 'prop-types'
import { useMedia } from 'componentry'

export default function SetupScreen({ children }) {
  const { sm } = useMedia()
  const paddingSize = sm ? 'base' : 'xl'
  return (
    <div className={`flex-grow-1 pr-${paddingSize} pl-${paddingSize}`}>{children}</div>
  )
}

SetupScreen.propTypes = {
  children: node.isRequired,
}
