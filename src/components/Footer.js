import React from 'react';
import './Footer.css';
import InstagramLogo from '../images/instagram-logo-black-transparent.jpg';

function Footer() {
    return(
        <div className='footer'>
            <h4 className='footer-logo'>Powerful Projects</h4>
            <a href='https://www.instagram.com/powerful.projects/' target="_blank" rel="noreferrer">
                <img className='instagram-logo' src={InstagramLogo} alt='Instagram logo' width="50" height="38" ></img>
            </a>
        </div>
    )
};

export default Footer;