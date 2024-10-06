import React from 'react';
import './ItemList.css'; // Archivo CSS para los productos

const ItemList = ({ items, onCardClick }) => {
    return (
        <div className="products-grid">
            {items.map(item => (
                <div 
                    key={item.id} 
                    className="product-card"
                    onClick={() => onCardClick(item.id)} // Redirige al detalle del producto
                    style={{ cursor: 'pointer' }} // Estilo de cursor para indicar que la card es clicable
                >
                    <img src={`/images/${item.image}`} alt={item.name} className="product-image" />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Stock: {item.stock}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
