import React from 'react'
import { useMedia } from 'componentry'

import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader'

export default function Header() {
  const { sm } = useMedia()
  return sm ? <MobileHeader /> : <DesktopHeader />
}
