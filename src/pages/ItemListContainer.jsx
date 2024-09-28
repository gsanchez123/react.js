import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CartWidget from "../components/CartWidget";
import StripeCheckout from 'react-stripe-checkout';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [onlyInStock, setOnlyInStock] = useState(false);

    useEffect(() => {
        const fetchedItems = [
            { id: 1, name: 'Remera Hombre', price: 20, category: 'deportes', stock: 10, image: '../images/remerahombre.jpg' },
            { id: 2, name: 'Remera Mujer', price: 40, category: 'urbana', stock: 5, image: '../images/remeramujer.jpg' },
            { id: 3, name: 'Camisetas Unisex', price: 55, category: 'urbana', stock: 15, image: '../images/camisetasunisex.jpg' },
            { id: 4, name: 'Zapatillas Urbanas Mujer', price: 60, category: 'urbana', stock: 18, image: '../images/urbanasmujer.jpg' },
            { id: 5, name: 'Zapatillas Urbanas Hombre', price: 100, category: 'urbana', stock: 14, image: '../images/urbanashombre.jpg' },
            { id: 6, name: 'Zapatillas Urbanas ', price: 100, category: 'urbana', stock: 10, image: '../images/zapatillasurbanas.jpg' },
            { id: 7, name: 'Buzo Hoodie Hombre', price: 45, category: 'urbana', stock: 15, image: '../images/sudaderahombre.jpg' },
            { id: 8, name: 'Buzo Oversize', price: 46, category: 'urbana', stock: 10, image: '../images/buzooversize.jpg' },
            { id: 9, name: 'Buzo Oversize Mujer', price: 50, category: 'urbana', stock: 16, image: '../images/sudaderamujer.jpg' },
        ];

        const filtered = id
            ? fetchedItems.filter(item => item.category === id)
            : fetchedItems;

        setItems(filtered);
        setFilteredItems(filtered);
    }, [id]);

    const handleAddToCart = (item, size, color) => {
        if (item.stock === 0) {
            alert('Este producto no tiene stock disponible.');
            return;
        }
        const newCartItem = { ...item, size, color };
        setCart([...cart, newCartItem]);
        alert(`${item.name} agregado al carrito en talla ${size} y color ${color}`);
    };

    const handleRemoveFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase();
        setSearchTerm(search);
        applyFilters(items, search, priceRange, onlyInStock);
    };

    const applyFilters = (items, search = searchTerm, price = priceRange, inStock = onlyInStock) => {
        let filtered = items.filter(item =>
            item.name.toLowerCase().includes(search) &&
            item.price >= price[0] &&
            item.price <= price[1]
        );

        if (inStock) {
            filtered = filtered.filter(item => item.stock > 0);
        }

        setFilteredItems(filtered);
    };

    const handlePriceChange = (e) => {
        const { value, name } = e.target;
        const newRange = [...priceRange];
        newRange[name === 'min' ? 0 : 1] = Number(value);
        setPriceRange(newRange);
        applyFilters(items, searchTerm, newRange, onlyInStock);
    };

    const handleInStockChange = () => {
        setOnlyInStock(!onlyInStock);
        applyFilters(items, searchTerm, priceRange, !onlyInStock);
    };

    const handleToken = (token) => {
        // aca se va a manejar el token de Stripe para realizar el pago
        alert('Pago exitoso!');
        console.log(token);
    };

    return (
        <div className="container my-4">
            <h1 className="text-center">{id ? `Category: ${id}` : 'All Products'}</h1>

            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearch}
                className="form-control my-3"
            />

            <div className="filters mb-4">
                <label className="me-2">
                    Precio mínimo:
                    <input type="number" name="min" value={priceRange[0]} onChange={handlePriceChange} className="form-control" />
                </label>
                <label>
                    Precio máximo:
                    <input type="number" name="max" value={priceRange[1]} onChange={handlePriceChange} className="form-control" />
                </label>
            </div>

            <div className="stock-filter mb-4">
                <label>
                    <input type="checkbox" checked={onlyInStock} onChange={handleInStockChange} />
                    Solo mostrar productos en stock
                </label>
            </div>

            <CartWidget cart={cart} onRemoveFromCart={handleRemoveFromCart} />

            <ItemList items={filteredItems} onAddToCart={handleAddToCart} />

            {cart.length > 0 && (
                <StripeCheckout
                    stripeKey="tu_clave_publica_de_stripe"
                    token={handleToken}
                    amount={cart.reduce((total, item) => total + item.price * item.stock, 0) * 100} // Total en centavos
                    name="Compra de Productos"
                    billingAddress
                    shippingAddress
                >
                    <button className="btn btn-success mt-4">Comprar Ahora</button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default ItemListContainer;
