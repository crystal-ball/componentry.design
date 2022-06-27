import { Icon } from 'componentry'
import { useState } from 'react'

let defaultColorScheme: 'light' | 'dark' = 'light'
if (typeof window !== 'undefined') {
  const chosenScheme = localStorage.getItem('color-scheme')
  if (chosenScheme === 'dark' || chosenScheme === 'light') {
    defaultColorScheme = chosenScheme
  } else {
    defaultColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
}

export function ColorSchemeToggle() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(defaultColorScheme)

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
