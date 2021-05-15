import { AppProps } from 'next/app'
import { Theme } from 'componentry'
import '@/styles/app.scss'

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
