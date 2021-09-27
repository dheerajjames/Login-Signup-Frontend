import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../utils/LoginContext';
import styles from './Nav.module.css';
// import Logo from '../../../';

function Navigation(){
    const {loginValue, setLogin} = useContext(LoginContext);

    const clearSession =() => {
        setLogin(false);
    }

    return (
        <header className={styles.header}>
        {/* <Link to="/"><img src={Logo} alt="Logo" className={styles.navLogo}></img></Link> */}
        <div className={styles.container}>
            <ul className={styles.navContainer}>
                <li className={styles.navItem}><Link to="/home" className={styles.navLink}>Home</Link></li>
                {   loginValue ?
                        <li className={styles.navitem}><Link to="/" className={styles.navLink} onClick={clearSession}>Logout</Link></li>
                    :
                    <>
                        <li className={styles.navitem}><Link to="/register" className={styles.navLink}>Register</Link></li>
                        <li className={styles.navitem}><Link to="/home" className={styles.navLink}>Login</Link></li>
                    </>
                }
            </ul>
            <div className={styles.hidden}><i className="fa fa-bars fa-2x humburger"></i></div>
        </div>
        </header>
    )      
}

export default Navigation;