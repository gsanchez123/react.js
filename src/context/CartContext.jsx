import React, { createContext, useState, useContext } from 'react';

// Crear y exportar explícitamente el CartContext
export const CartContext = createContext();

// Hook personalizado para acceder al contexto del carrito
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar productos al carrito
    const addToCart = (product, size, color) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(
                item => item.id === product.id && item.size === size && item.color === color
            );
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && item.size === size && item.color === color
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, size, color, quantity: 1 }];
            }
        });
    };

    // Función para eliminar productos del carrito
    const removeFromCart = (productId, size, color) => {
        setCartItems(prevItems => 
            prevItems.filter(item => !(item.id === productId && item.size === size && item.color === color))
        );
    };

    // Calcular el precio total del carrito
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Obtener el número total de artículos en el carrito
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};
