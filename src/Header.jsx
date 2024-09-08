

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // se utlizo un ícono para el carrito
import './Header.css';

function Header() {
    // Estado para manejar el carrito de compras 
    const [cartItems, setCartItems] = useState(0);

    // Función para agregar un producto al carrito 
    const addToCart = () => {
        setCartItems(cartItems + 1);
        alert('Producto añadido al carrito!');
    };

    return (
        <header className="header">
            <div className="title-container">
                <h1>Sales Center</h1> {/* Título del proyecto */}
            </div>
            <nav>
                <ul className="categories">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="cart-widget">
                <FaShoppingCart size={24} /> {/* Ícono del carrito */}
                <span className="cart-count">{cartItems}</span>
                <button onClick={addToCart} className="cart-button">
                    Añadir al Carrito
                </button>
            </div>
        </header>
    );
}

export default Header;
