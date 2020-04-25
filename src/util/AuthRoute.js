import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route {...rest}
        render={(props) => authenticated === true ? <Redirect to="/fit-blog" /> : <Component {...props} />}
    />

)
export default AuthRoute;