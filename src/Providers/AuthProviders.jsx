import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user,setUser] = useState(null);
    const [loading,isLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            isLoading(false);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const createUser = (email,password) =>{
        isLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const popUpSingIn =(googleProvider) =>{
        isLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signIn = (email,password) =>{
        isLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        isLoading(true);
        return signOut(auth);
    }

    const authInfo = {user,loading,isLoading,signIn,logOut,createUser,setUser,popUpSingIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;