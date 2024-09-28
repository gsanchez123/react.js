import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';  // NO olvidar de tener este componente implementado
import './ItemDetailContainer.css';     // Importa el archivo de CSS

const ItemDetailContainer = () => {
    const { id } = useParams();  // Obtener ID del producto desde la URL
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Simula la obtención de detalles de producto
        const fetchItem = async () => {
            const fetchedItems = [
                { id: 1, name: 'Camiseta Deportiva', price: 20, description: 'Ideal para entrenamientos.', stock: 10 },
                { id: 2, name: 'Pantalones Urbanos', price: 40, description: 'Estilo cómodo y moderno.', stock: 5 },
                { id: 3, name: 'Zapatillas Urbanas', price: 60, description: 'Ligereza y comodidad.', stock: 8 },
                { id: 4, name: 'Chaqueta Urbana', price: 100, description: 'Perfecta para el clima frío.', stock: 3 },
            ];

            // Buscar el producto por ID
            const foundItem = fetchedItems.find(product => product.id === parseInt(id));
            setItem(foundItem);
        };

        fetchItem();
    }, [id]);

    return (
        <div className="detail-container">
            {item ? (
                <ItemDetail item={item} />
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
