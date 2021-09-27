import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

function LandingPage(){
    console.log("First page");
    return <div className={styles.container}>
        <h1>Let's Get Started</h1>
        <Link to='/register' className={styles.btn}>Register</Link>
        <Link to='/login' className={styles.btn}>Login</Link>
    </div>
}

export default LandingPage;