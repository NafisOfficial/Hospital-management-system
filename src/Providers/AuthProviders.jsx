import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const [user,setUser] = useState(null);
    const authInfo = {user,createUser,setUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;