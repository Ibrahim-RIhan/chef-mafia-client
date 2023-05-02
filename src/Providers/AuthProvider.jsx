import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup, updateCurrentUser } from "firebase/auth";
import app from '../../src/firebase.config';




export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const LoginWithGithub =() =>{
        return signInWithPopup(auth, githubProvider)
    }
    const updateProfile = (name, photoURL) => {
        return user.updateCurrentUser({
            displayName: name,
            photoURL: photoURL,
        });
    };
    const authInfo = {
        createUser,
        LoginWithGoogle,
        LoginWithEmailPassword,
        updateProfile,
        LoginWithGithub


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider