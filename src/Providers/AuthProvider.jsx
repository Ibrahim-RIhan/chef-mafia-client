import React, { createContext, useState } from 'react';
import { GoogleAuthProvider , createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithEmailLink, signInWithPopup } from "firebase/auth";
import app from '../../src/firebase.config';




export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
   


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginWithEmailPassword = (email, password ) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LoginWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        createUser,
        LoginWithGoogle,
        LoginWithEmailPassword,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider