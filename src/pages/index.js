import Head from 'next/head'

import Title from '@/components/title'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Componentry</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Title className={styles.title}>Componentry</Title>
      </main>
    </div>
  )
}
