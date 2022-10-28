import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);



    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubProviderLogin = () => {
        setLoding(true);
        return signInWithPopup(auth, gitHubProvider);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoding(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoding(false);
        });
        return () => unSubscribe();
    }, [])


    const authInfo = {
        user, loading, createUser, signIn, providerLogin, gitHubProviderLogin,
        updateUserProfile,
        verifyEmail,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;