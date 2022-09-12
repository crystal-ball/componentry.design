import { Icon } from 'componentry'
import { useEffect, useState } from 'react'

export function ColorSchemeToggle() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const userScheme = localStorage.getItem('color-scheme')
    if (userScheme === 'light' || userScheme === 'dark') {
      setColorScheme(userScheme)
    } else {
      setColorScheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      )
    }
  }, [])

  return (
    <Icon
      id={colorScheme === 'dark' ? 'moon' : 'sun'}
      color='link'
      className='cursor-pointer'
      onClick={() => {
        const updatedScheme = colorScheme === 'dark' ? 'light' : 'dark'
        setColorScheme(updatedScheme)
        toggleColorScheme(updatedScheme)
      }}
    />
  )
}

function toggleColorScheme(scheme: 'light' | 'dark') {
  if (scheme === 'dark') {
    document.body.classList.add('color-scheme-dark')
    document.body.classList.remove('color-scheme-light')
    document.body.parentElement!.dataset.theme = 'dark' // Docsearch color scheme indicator
    localStorage.setItem('color-scheme', 'dark')
  } else {
    document.body.classList.add('color-scheme-light')
    document.body.classList.remove('color-scheme-dark')
    document.body.parentElement!.dataset.theme = 'light' // Docsearch color scheme indicator
    localStorage.setItem('color-scheme', 'light')
  }
}
