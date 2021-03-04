import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
    userName: string;
    imageProfileUrl: string;
}

export function Profile({ userName, imageProfileUrl }: ProfileProps) {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src={imageProfileUrl} alt="Leonardo Martins" />
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}