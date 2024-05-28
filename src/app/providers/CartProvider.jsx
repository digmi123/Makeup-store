"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const contextCart = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCartItems() {
      await axios
        .get("/api/product/cart")
        .then((res) => {
          setCartItems(res.data);
        })
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    }

    getCartItems();
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const deleteFromCart = async (productId) => {
    console.log({ productId });
    axios.delete(`/api/product/cart/${productId}`);
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  return (
    <contextCart.Provider
      value={{ loading, cartItems, addToCart, deleteFromCart }}
    >
      {children}
    </contextCart.Provider>
  );
}

export function useCart() {
  return useContext(contextCart);
}
