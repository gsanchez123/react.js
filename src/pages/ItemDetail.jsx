import React from 'react';
import './ItemDetail.css';  // Importa el archivo CSS

const ItemDetail = ({ item }) => {
    return (
        <div className="detail">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <p className="stock">Stock available: {item.stock}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ItemDetail;
