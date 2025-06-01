import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)

    if (loading) {
        return <p className="text-3xl text-center my-9">Loading.......</p>
    }


    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;













































;