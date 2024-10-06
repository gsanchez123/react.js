// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css'; 

const Cart = () => {
    const { cartItems, removeFromCart, getTotalPrice } = useCart();

    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                {/* Muestra la imagen si está disponible */}
                                {item.image && <img src={item.image} alt={item.name} width="50" />}
                                
                                <div className="item-details">
                                    <h2>{item.name}</h2>
                                    <p>Tamaño: {item.size}</p> {/* Mostrar talla si es relevante */}
                                    <p>Color: {item.color}</p> {/* Mostrar color si es relevante */}
                                    <p>Precio: ${item.price.toFixed(2)}</p> {/* formatear el precio */}
                                    
                                    <button 
                                        onClick={() => removeFromCart(item.id)} 
                                        className="remove-button"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h3>Total: ${getTotalPrice().toFixed(2)}</h3> {/*formatear el precio */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
