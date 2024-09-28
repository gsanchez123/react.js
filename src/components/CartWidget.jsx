import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <span>🛒</span>
            <span>Items en el carrito: {totalItems || 0}</span> {/* Manejo de undefined */}
        </div>
    );
};

export default CartWidget;

