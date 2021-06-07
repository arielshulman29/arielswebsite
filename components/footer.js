import React from 'react'
import * as footerStyles from './footer.module.scss'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Footer = () =>
    <footer className={footerStyles.footerStyle}>
        <div className={footerStyles.icons}>
            <a className={footerStyles.icon} href='http://www.github.com' target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a className={footerStyles.icon} href='http://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a className={footerStyles.icon} href='http://www.facebook.com' target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
        </div>
        {/* <div className={footerStyles.content}>
            <span>&copy; ARIEL SHULMAN </span>
        </div> */}
    </footer>

export default Footer