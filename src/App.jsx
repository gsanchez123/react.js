
// src/App.jsx
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './components/Cart'; // Componente del carrito
import { CartProvider } from './context/CartContext'; // Proveedor del contexto del carrito
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider> {/* Envolviendo la aplicación con el proveedor del carrito */}
      <Router>
        <Header /> {/* Encabezado del sitio */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/products" element={<Products />} /> {/* Página de productos */}
          <Route path="/contact" element={<Contact />} /> {/* Página de contacto */}
          <Route path="/category/:id" element={<ItemListContainer />} /> {/* Página de lista de productos por categoría */}
          <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Página de detalles del producto */}
          <Route path="/cart" element={<Cart />} /> {/* Página del carrito */}
        </Routes>
        <Footer /> {/* Pie de página */}
      </Router>
    </CartProvider>
  );
};

export default App;
