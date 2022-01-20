import Head from 'next/head'

export function AppHead() {
  return (
    <Head>
      <title>Componentry</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Libre+Baskerville:wght@700&family=Nunito+Sans:wght@400;600&display=swap'
        rel='stylesheet'
      />
    </Head>
  )
}
