import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer bg-light text-center py-3">
            <div className="container">
                <div className="social-icons">
                    <a href="https://facebook.com" className="me-3"><FaFacebook size={30} className="text-primary" /></a>
                    <a href="https://twitter.com" className="me-3"><FaTwitter size={30} className="text-primary" /></a>
                    <a href="https://instagram.com" className="me-3"><FaInstagram size={30} className="text-primary" /></a>
                </div>
                <p>© 2024 Sales Center. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
