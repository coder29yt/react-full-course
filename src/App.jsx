import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// importing components
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar setProducts={setProducts} />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
