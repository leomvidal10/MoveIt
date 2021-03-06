import Head from "next/head";
import { GetServerSideProps } from 'next'
import React from "react";
import { ChallengeBox } from "../components/challengeBox";
import { CompletedChallenges } from "../components/completedChallenge";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import { XpBar } from "../components/XpBar";
import { CountDownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/HomeApp.module.css'
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { Octokit } from "@octokit/core";

interface HomeProps {
    level: number
    currentXp: number
    challengesCompleted: number
    user: string
    imageProfile: string

}

export default function home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentXp={props.currentXp}
            challengesCompleted={props.challengesCompleted}>

            <div className={styles.containerBody}>
                <div className={styles.container}>
                    <Head>
                        <title>Inicio / move.it</title>
                    </Head>
                    <XpBar />
                    <CountDownProvider>
                        <section>
                            <div>
                                <Profile userName={props.user} imageProfileUrl={props.imageProfile} />
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
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentXp, challengesCompleted } = ctx.req.cookies;

    const octokit = new Octokit({ auth: `597301712caed697b8a3bb1699a950de2f017fd7` });

    const response = await octokit.request("GET /user", {
    });

    return {
        props: {
            level: Number(level),
            currentXp: Number(currentXp),
            challengesCompleted: Number(challengesCompleted),
            user: response.data.name,
            imageProfile: response.data.avatar_url,
        }
    }
}