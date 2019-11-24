import React from 'react'
import { node } from 'prop-types'
import { useMedia } from 'componentry'

export default function SetupScreen({ children }) {
  const { sm } = useMedia()
  return <div className={`flex-grow-1 m-${sm ? 'base' : 'xl'}`}>{children}</div>
}

SetupScreen.propTypes = {
  children: node.isRequired,
}
