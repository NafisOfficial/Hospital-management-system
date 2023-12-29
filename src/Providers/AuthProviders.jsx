import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signUpWithGoogle =(google) =>{
        return signInWithPopup(auth,google)
    }

    const authInfo = {user,createUser,setUser,signUpWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;