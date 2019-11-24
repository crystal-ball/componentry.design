import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Anchor } from 'componentry'

export default function Link(props) {
  return <Anchor as={ReactRouterLink} {...props} />
}
