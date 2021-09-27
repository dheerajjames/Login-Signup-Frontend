import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "./LoginContext";

function ProtectedRoute(props) {
    const {loginValue} = useContext(LoginContext);

    return <>
        {!loginValue ? 
            <Redirect to="/login" />
            :
            <Route path={props.path}>{props.children}</Route>
        }
    </>
}
export default ProtectedRoute;