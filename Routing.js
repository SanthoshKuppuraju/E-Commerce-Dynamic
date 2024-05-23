import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routing;
