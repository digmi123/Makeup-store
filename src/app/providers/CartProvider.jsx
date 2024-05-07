"use client";

import { createContext, useContext, useState } from "react";

const contextCart = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log(cartItems);
  };

  return (
    <contextCart.Provider value={{ cartItems, addToCart }}>
      {children}
    </contextCart.Provider>
  );
}

export function useCart() {
  return useContext(contextCart);
}
