// CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            // Si el item ya está en el carrito, hay que  incrementar la cantidad o hacer algo más no olvidar!!!
            alert(`${item.name} ya está en el carrito.`);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
