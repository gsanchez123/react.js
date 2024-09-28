
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from "./pages/Footer";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import { CartProvider } from './context/CartContext'; // Importar el CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CartProvider> {/* Envolviendo la aplicación con el proveedor del carrito */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
