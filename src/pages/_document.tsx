import { Head, Html, Main, NextScript } from 'next/document'

const setBodyBackgroundClass = `var colorScheme = localStorage.getItem('color-scheme');
if (colorScheme == undefined) {
  colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
document.body.classList.add(\`color-scheme-\${colorScheme}\`); // App color scheme indicator
document.body.parentElement.dataset.theme = colorScheme; // Docsearch color scheme indicator
`

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/favicon.ico?v=2' />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;700&family=Racing+Sans+One&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-background text-body'>
        {/* eslint-disable-next-line react/no-danger -- next/script not working ¯\_(ツ)_/¯  */}
        <script dangerouslySetInnerHTML={{ __html: setBodyBackgroundClass }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
