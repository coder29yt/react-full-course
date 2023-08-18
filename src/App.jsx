import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// importing context
import ProductContext from "./context/ProductContext";

// importing components
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Product added to cart");
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    alert("Product removed from cart");
  };

  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts, cart, addToCart, removeFromCart }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
};

export default App;
