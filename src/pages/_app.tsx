import { AppProps } from 'next/app'
import { Theme } from 'componentry'

import '@/styles/app.css'
import '@/styles/prism-night-owl.css'
import Head from 'next/head'

const theme = {
  Text: {
    elementsMap: {
      title: 'h1',
    },
  },
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Theme theme={theme}>
      <Head>
        <title>Componentry</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Theme>
  )
}
