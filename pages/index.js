import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Letícia Costa</title>
        <meta name="description"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SEJA BEM VINDO(A)<br/><a href="https://www.instagram.com/l3ticia_costa/">LETÍCIA COSTA</a>
        </h1>
        <p>SITE EM CONSTRUÇÃO - VOLTE EM BREVE!</p>

      </main>
    </div>
  )
}
