import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
