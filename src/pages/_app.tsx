import { configureIconElementsMap, configureTextElementsMap } from 'componentry'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Github } from '@/theme/icons/Github'
import { Hologram } from '@/theme/icons/Hologram'
import { Menu } from '@/theme/icons/Menu'

import '@/styles/app.css'
import '@/styles/prism-night-owl.css'

configureIconElementsMap({
  github: Github,
  menu: Menu,
  hologram: Hologram,
})

configureTextElementsMap({
  title: 'h1',
  subtitle: 'h4',
  detail: 'p',
  overline: 'div',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Componentry</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
