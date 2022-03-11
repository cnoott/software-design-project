import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './index';
import Login from '../login/Login';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Navigate to='/login'/>
    )} />
);

export default PrivateRoute;

