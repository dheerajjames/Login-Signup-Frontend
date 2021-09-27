import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import { Link, Redirect, Route } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';

function Login(){
    const [token, setToken] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setLogin } = useContext(LoginContext);

    // const url = 'http://localhost:3002/users/login';
    const url = 'https://login-signup-application.herokuapp.com/users/login';

    const handleChange = (event) => {
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            userEmail: email,
            userPassword: password,
        }

        try{
            let resData = await fetch(url, {
                mode: 'no-cors',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();
            if(resData.user && resData.accessToken){
                event.target.email.value = event.target.password.value = "";
                setToken(resData.token); 
                if(token){}
                setLogin(true);
                setRedirect(true);
            }

        }catch(err){
            console.log(err);
            event.target.email.value = event.target.password.value = "";
            alert("User Cannot be Logged In. ");
        }
    }

    return <>

    <Route>
        {redirect ?
            <Redirect to='/home' />
            :
            <form className={styles.form} onSubmit={loginUser}>
                <h1>LOGIN</h1>
                <label htmlFor="email">Email </label>
                <input className={styles.input} id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input className={styles.input} id="password" type="password" name="password" onChange={handleChange} required minLength="8" autoComplete="on"/>

                <button type="submit" className={styles.btn}>LOGIN</button>

                <p>Don't have an account? <Link to="/register" className={styles.reg}>REGISTER</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Login;