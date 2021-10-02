import React from "react";
import styled from 'styled-components';
import styles from './Footer.module.css';
// import logo from "./Sblogo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";


const FooterLinks = styled.div`
padding: 10px;
display: flex;
width: 100px;
justify-content: space-between;
align-items: center;
`;

const Image = styled.img`
    width: 150px;
`;

function Footer(props){
//    let color= props.primary;
//     const FooterDiv = styled.div`
//     width: 100%;
//     padding-top: 3em;
//     position: absolute;
//     bottom: 0;
//     display: flex;
//     justify-content: space-between;
// `;
    return(
        <div className={styles.footer}>
        <Image src="https://dheerajjames.github.io/images/logo.png" alt="logo"></Image> 
            {props.data}
       
        <FooterLinks>
            <FaLinkedin />
            <FaInstagram />
            <FaGithub />
        </FooterLinks>
        </div>
    )
}

export default Footer