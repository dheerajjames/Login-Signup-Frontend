import React, { useState } from 'react';
import styles from './Register.module.css';
import { Link } from "react-router-dom";
import { Redirect, Route } from 'react-router';

function Register(){
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const url = 'http://localhost:3002/users/signup';
    const url = 'https://login-signup-application.herokuapp.com/users/register';


    const handleChange = (event) => {
        switch(event.target.name){
            case 'email':
                setEmail(event.target.value);
                break;
            case 'password':
                setPassword(event.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const registerUser = async (event) => {
        event.preventDefault();
        
        const reqObj = {
            userEmail: email,
            userPassword: password,
        }

        try{
            let resData = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqObj),
            });
    
            resData = await resData.json();

            if(resData && resData.data){
                event.target.email.value =
                event.target.password.value = 
                event.target.confirmPassword.value = "";
                setRedirect(true);
            }
            else{
                event.target.email.value =
                event.target.password.value = 
                event.target.confirmPassword.value = "";
                alert("User Could not be created");
                setRedirect(false);
            }
            
        }catch(err){
            console.log(err);
            event.target.email.value =
            event.target.password.value = 
            event.target.confirmPassword.value = "";
            alert("User Could not be Created. Try Again!!");
        }
    }

    return <>
    <Route>
        { redirect ?
            <Redirect to="/login" />
            :
            <form className={styles.form} onSubmit={registerUser}>
                <h1>REGISTER</h1>

                <label htmlFor="email">Email </label>
                <input className={styles.input} id="email" type="email" name="email" onChange={handleChange} required/>

                <label htmlFor="password">Password </label>
                <input className={styles.input} id="password" type="password" name="password" onChange={handleChange} autoComplete="on" required minLength="8"/>

                <label htmlFor="confirmPassword">Confirm Password </label>
                <input className={styles.input} id="confirmPassword" type="password" name="confirmPassword" onChange={handleChange} autoComplete="on" required minLength="8"/>

                <button type="submit" className={styles.btn}>REGISTER</button>

                <p>Already Registered? <Link to="/login" className={styles.reg}>LOGIN</Link></p>
            </form>
        }
    </Route> 
    </>
}

export default Register;