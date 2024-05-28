"use client";
import { useCart } from "@/app/providers/CartProvider";
import { useState } from "react";
import axios from "axios";

export default function QuantitySection({ product, color }) {
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  const addToCart = async () => {
    if (!color) {
      const colorWrapper = document.getElementById("color-wrapper");
      colorWrapper.classList.add("error");
      return;
    }
    axios.post("/api/product/cart", { product, quantity, color });
    cart.addToCart(product);
  };

  const handleAdd = () => {
    setQuantity((prev) => ++prev);
  };

  const handleRemove = () => {
    if (quantity === 0) return;
    setQuantity((prev) => --prev);
  };

  return (
    <div>
      <div className="py-[20px] flex flex-col gap-4">
        <h3>Quantity</h3>
        <div className="flex items-center gap-4">
          <button
            className="w-8 h-8 rounded border-none shadow-lg"
            onClick={handleAdd}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            className="w-8 h-8 rounded border-none shadow-lg"
            onClick={handleRemove}
          >
            -
          </button>
        </div>
        <p>Available pieces: 15</p>
      </div>

      <div className="flex flex-col pt-6 pb-2 gap-4">
        <button
          className="border-none min-w-40 py-3 border-2 border-black px-4 text-xl uppercase text-black shadow-md"
          onClick={addToCart}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}
