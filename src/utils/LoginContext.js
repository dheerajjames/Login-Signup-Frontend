import React, { useState } from 'react';

const LoginContext = React.createContext(false);

function LoginContextProvider(props){
    const [loginValue, setLoginValue] = useState(false);

    const { children } = props;

    const setLogin = (value) => {
        setLoginValue(value);
    } 

    return (
        <LoginContext.Provider value={{loginValue, setLogin}}>
            { children }
        </LoginContext.Provider>
    )
}

export default LoginContext;
export { LoginContextProvider }