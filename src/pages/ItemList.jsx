import React from 'react';
import './ItemList.css'; // Archivo CSS para los productos

const ItemList = ({ items, onAddToCart }) => {
    return (
        <div className="products-grid">
            {items.map(item => (
                <div key={item.id} className="product-card">
                    <img src={`/images/${item.image}`} alt={item.name} className="product-image" />
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Stock: {item.stock}</p>
                    
                    {/* Botón para guardar en el carrito */}
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(item, "M", "Rojo")} // se puede modificar el tamaño y color según los cambios
                    >
                        Guardar en el carrito
                    </button>

                    {/* Botón para comprar */}
                    <button
                        className="btn btn-success ms-2"
                        onClick={() => alert(`Compraste ${item.name}`)} // se va a implementar la lógica de compra
                    >
                        Comprar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;




