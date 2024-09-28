

import React from 'react';
import './Body.css';

function Body() {
    return (
        <main className="body-content">
            <section id="home" className="section">
                <h2>Welcome to Sales Center</h2>
                <p>Your one-stop shop for all things you love.</p>
            </section>
            <section id="products" className="section">
                <h2>Our Products</h2>
                <p>Check out our wide range of products.</p>
            </section>
            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you!</p>
            </section>
        </main>
    );
}

export default Body;
