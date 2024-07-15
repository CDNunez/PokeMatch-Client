import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Route, useNavigate } from 'react-router';


const ProtectedRoutes = ({children, ...rest}) => {
    const {sessionToken} = useContext(AuthContext);
    const navigate = useNavigate();

    if(!sessionToken) {
        navigate('/');
        return null;
    }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoutes