

// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

function Header() {
    // Estado para manejar el carrito de compras (simulación)
    const [cartItems, setCartItems] = useState(0);

    // Función para agregar un producto al carrito (simulación)
    const addToCart = () => {
        setCartItems(cartItems + 1);
        alert('Producto añadido al carrito!');
    };

    return (
        <header className="header">
            <div className="title-container">
                <h1>Sales Center</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="cart-container">
                <button onClick={addToCart} className="cart-button">
                    Añadir al Carrito
                </button>
                <p>Items en el carrito: {cartItems}</p>
            </div>
        </header>
    );
}

export default Header;



