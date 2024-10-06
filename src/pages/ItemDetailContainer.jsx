import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';  // NO olvidar de tener este componente implementado
import './ItemDetailContainer.css';     // Importa el archivo de CSS

const ItemDetailContainer = () => {
    const { id } = useParams();  // Obtener ID del producto desde la URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Simula la obtención de detalles de producto
        const fetchedItems = [
            { id: 1, name: 'Remera Hombre', price: 20, description: 'Remera deportiva ideal para entrenamientos.', stock: 10 },
            { id: 2, name: 'Remera Mujer', price: 40, description: 'Remera cómoda para uso urbano.', stock: 5 },
            { id: 3, name: 'Zapatillas Urbanas', price: 60, description: 'Zapatillas ligeras y cómodas.', stock: 8 },
            { id: 4, name: 'Chaqueta Urbana', price: 100, description: 'Chaqueta ideal para el frío.', stock: 3 },
        ];

        // Buscar el producto por ID
        const foundItem = fetchedItems.find(product => product.id === parseInt(id));
        setItem(foundItem);
    }, [id]);

    // Define la función onAddToCart
    const onAddToCart = (item, size, color) => {
        console.log(`Producto agregado al carrito: ${item.name}, Talle: ${size}, Color: ${color}`);
        // Lógica para agregar el producto al carrito
    };

    return ( 
        <div className="detail-container">
            {item ? (
                <ItemDetail item={item} onAddToCart={onAddToCart} />  /*función onAddToCart */
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
