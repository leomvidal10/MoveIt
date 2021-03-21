import Head from "next/head";
import { GetServerSideProps } from 'next'
import React, { useContext } from "react";
import { ChallengeBox } from "../components/challengeBox";
import { CompletedChallenges } from "../components/completedChallenge";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import { XpBar } from "../components/XpBar";
import { CountDownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/HomeApp.module.css'
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { ProfileProvider } from "../contexts/ProfileContext";

interface HomeProps {
    level: number
    currentXp: number
    challengesCompleted: number
    nameUser: string
    imageProfile: string
}

export default function home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentXp={props.currentXp}
            challengesCompleted={props.challengesCompleted}>
             <ProfileProvider nameUser={props.nameUser} imageProfile={props.imageProfile}>
                <div className={styles.containerBody}>
                    <div className={styles.container}>
                        <Head>
                            <title>Inicio / move.it</title>
                        </Head>
                        <XpBar />
                        <CountDownProvider>
                            <section>
                                <div>
                                    <Profile imageProfile={props.imageProfile} nameUser={props.nameUser}/>
                                    <CompletedChallenges />
                                    <Countdown />
                                </div>
                                <div>
                                    <ChallengeBox />
                                </div>
                            </section>
                        </CountDownProvider>
                    </div>
                </div>
            </ProfileProvider>
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentXp, challengesCompleted, nameUser, imageProfile } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentXp: Number(currentXp),
            challengesCompleted: Number(challengesCompleted),
            nameUser: String(nameUser),
            imageProfile: String(imageProfile)
        }
    }
}