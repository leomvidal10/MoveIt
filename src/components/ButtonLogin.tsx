import { useContext } from 'react'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/pages/Index.module.css'

export function ButtonLogin() {
    const { clickLogin } = useContext(ProfileContext)

    return (
        <div className={styles.profileContainer}>
            <button className={styles.buttonArea} onClick={clickLogin}>
                <img className={styles.button} src="/icons/Git.svg" alt="git logo" />
            </button>
        </div>
    )
}