import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                <a href="https://facebook.com" className="icon-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={30} /></a>
                    <a href="https://twitter.com" className="icon-link"target="_blank" rel="noopener noreferrer" aria-label="Twiter"><FaTwitter size={30} /></a>
                    <a href="https://instagram.com" className="icon-link"target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={30} /></a>
                </div>
                <p className="footer-text">© 2024 Sales Center. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;

