import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import firebase from 'firebase';
import Cookies from 'js-cookie';

interface ProfileProviderProps {
    children: ReactNode;
    nameUser: string;
    imageProfile: string;
}

interface ProfileContextData {
    nameUser: string,
    imageProfile: string,
    clickLogin: () => void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children, ...rest }: ProfileProviderProps) {
    const [nameUser] = useState(rest.nameUser);
    const [imageProfile] = useState(rest.imageProfile);

    const provider = new firebase.auth.GithubAuthProvider();
    const router = useRouter();
    const firebaseConfig = {
        apiKey: "AIzaSyD0busNjEbx2GFgbwJlG4rP3JT_JdUh1rI",
        authDomain: "oauth-278501.firebaseapp.com",
        projectId: "oauth-278501",
        storageBucket: "oauth-278501.appspot.com",
        messagingSenderId: "634028590836",
        appId: "1:634028590836:web:6cb6d88c81b50771aec0a1",
        measurementId: "G-2R9KJF9NMG"
    };

    function clickLogin() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log('firebase initializeApp')
        } else {
            firebase.app();
            console.log('ja está logado firebase.app')
        }

        firebase.auth().signInWithPopup(provider).then((result) => {
            Cookies.set('nameUser', result.user.displayName)
            Cookies.set('imageProfile', result.user.photoURL)
            router.push("https://move-it-tau-six.vercel.app/home")
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <ProfileContext.Provider value={{
            nameUser,
            imageProfile,
            clickLogin
        }}>
            {children}
        </ProfileContext.Provider>
    )
}