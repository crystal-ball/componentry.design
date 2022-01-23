import { AppProps } from 'next/app'
import { Theme } from 'componentry'

import '@/styles/app.css'
import '@/styles/prism-night-owl.css'

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
      <Component {...pageProps} />
    </Theme>
  )
}
