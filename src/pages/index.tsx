import Head from 'next/head'
import React from 'react'
import { ButtonLogin } from '../components/ButtonLogin'
import { ProfileProvider } from '../contexts/ProfileContext'
import styles from '../styles/pages/Index.module.css'

export default function Index() {
  return (
    <ProfileProvider nameUser={""} imageProfile={""}>
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
              <ButtonLogin />
            </div>
          </section>
        </div>
      </div >
    </ProfileProvider>
  )
}