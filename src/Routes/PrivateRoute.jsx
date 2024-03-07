import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    
};

export default PrivateRoute;