import React, { useState } from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Negro');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div className="detail-container">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <p className="stock">Stock available: {item.stock}</p>

            <div className="size-selection">
                <label htmlFor="size">Select Size:</label>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <div className="color-selection">
                <label htmlFor="color">Select Color:</label>
                <select id="color" value={selectedColor} onChange={handleColorChange}>
                    <option value="Negro">Negro</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Rojo">Rojo</option>
                    <option value="Azul">Azul</option>
                </select>
            </div>

            <button 
                className="btn btn-primary mt-3" 
                onClick={() => onAddToCart(item, selectedSize, selectedColor)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ItemDetail;
