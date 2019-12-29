import React from 'react'
import { Route, Redirect, } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    return (
        // rest.login ? 
        //     <Route path={rest.path} exact>{children}</Route> :
        //     <Route {...rest} render={({location}) => <Redirect to={{ pathname: "/login", state: { from: location }}} />} />
        <Route 
            {...rest}
            render={({ location }) => rest.login ? children  : <Redirect to={{ pathname: "/login", state: { from: location } }} />}
            exact={true}
        />
    );
}
export default PrivateRoute