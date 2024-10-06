import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const productImages = [
        { src: '/images/img1zapa1.jpg', name: 'Product 1', price: 30 },
        { src: '/images/img2zapa2.jpg', name: 'Product 2', price: 60 },
        { src: '/images/img3zapa3.jpg', name: 'Product 3', price: 90 }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Sales Center</h1>
                    <p className="hero-subtitle">Discover the latest in urban and sports fashion</p>
                    <Link to="/products" className="btn-primary">Explore Collection</Link>
                </div>
                <img src="/images/banner.jpg" alt="Fashion banner" className="hero-image" />
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2 className="section-title">Lo Mas Comprado</h2>
                <div className="product-grid">
                    {productImages.map((product, index) => (
                        <div key={index} className="product-item">
                            <img src={product.src} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">${product.price}</p>
                            <button className="btn-secondary">Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Redes sociales */}
            <section className="social-media">
                <h2 className="section-title">Follow Us</h2>
                <div className="social-icons">
                    {['instagram', 'facebook', 'twitter'].map((social) => (
                        <a 
                            key={social} 
                            href={`https://www.${social}.com`} 
                            target="_blank" 
                            rel="noreferrer" 
                            className={`icon-${social}`}>
                            {social.charAt(0).toUpperCase() + social.slice(1)}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
