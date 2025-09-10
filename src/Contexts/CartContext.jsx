// src/contexts/CartContext.js
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState(() => {
    const stored = localStorage.getItem("cartData");
    return stored ? JSON.parse(stored) : [];
  });

  // Load cart from localStorage on app start
  useEffect(() => {
    const storedCart = localStorage.getItem("cartData");
    if (storedCart) {
      setCartData(JSON.parse(storedCart));
    }
  }, []);

  // Save to localStorage whenever cartData changes
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  const addProduct = (product) => {
    setCartData([{ ...product }, ...cartData]);
  };

  const deleteProduct = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartData, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}
