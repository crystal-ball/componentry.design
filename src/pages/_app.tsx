import { AppProps } from 'next/app'
import Head from 'next/head'

import { configureComponentry } from '@/theme/componentry'
import '@/styles/app.css'
import '@/styles/prism-night-owl.css'

configureComponentry()

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
