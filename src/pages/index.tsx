import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Index.module.css'

export default function Home() {
  return (
    <div className={styles.containerBody}>
      <div className={styles.container}>
        <Head>
          <title>Inicio / move.it</title>
        </Head>
        <section>
          <div>
            <img src="/icons/Simbolo.svg" alt="moveIt" />
          </div>
          <div className={styles.areaLogin}>
            <img src="/icons/Logo.svg" alt="logo" />
            <h1>Bem-Vindo!</h1>
            <Link href="https://github.com/login/oauth/authorize?client_id=614cecf796aa8cca7619">
              <img className={styles.button} src="/icons/Git.svg" alt="git logo" />
            </Link>
          </div>
        </section>
      </div>
    </div >
  )
}