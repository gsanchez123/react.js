import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Sales Center</Link>
            </div>
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <CartWidget />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Header;
