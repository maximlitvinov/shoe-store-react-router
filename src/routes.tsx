import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductItems, Product, About, NavBar } from "./components";
function RouteConfig() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<ProductItems />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteConfig;
