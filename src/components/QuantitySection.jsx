"use client";
import { useCart } from "@/app/providers/CartProvider";
import styles from "@/app/styles/productPage.module.css";
import { useState } from "react";

export default function QuantitySection({ product }) {
  const [quantity, setQuantity] = useState(0);
  const cart = useCart();

  const handleAdd = () => {
    setQuantity((prev) => ++prev);
  };

  const handleRemove = () => {
    if (quantity === 0) return;
    setQuantity((prev) => --prev);
  };

  return (
    <div className={styles.actionSection}>
      <div className={styles.quantitySection}>
        <h3>Quantity</h3>
        <div className={styles.quantityActions}>
          <button className={styles.updateButton} onClick={handleAdd}>
            +
          </button>
          <p>{quantity}</p>
          <button className={styles.updateButton} onClick={handleRemove}>
            -
          </button>
        </div>
        <p>Available pieces: 15</p>
      </div>

      <div className={styles.buttonsSection}>
        <button
          className={styles.btnPrimary}
          onClick={() => cart.addToCart(product)}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}
