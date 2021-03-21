import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { ProfileContext } from '../contexts/ProfileContext'
import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
    nameUser: string,
    imageProfile: string

}

export function Profile(props : ProfileProps) {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src={props.imageProfile} alt={props.nameUser} />
            <div>
                <strong>{props.nameUser}</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}