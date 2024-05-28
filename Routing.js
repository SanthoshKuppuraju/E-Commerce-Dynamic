import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import ProductPage from "./ProductPage";
import Shop from "./Shop";
import Cart from "./Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productpage/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default Routing;
