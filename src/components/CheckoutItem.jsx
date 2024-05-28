import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/providers/CartProvider";

function CheckoutItem({ item }) {
  const { deleteFromCart } = useCart();
  const { product, quantity } = item;
  return (
    <main className="grid grid-cols-5 border-b-2 border-gray-300">
      <div>
        <Image
          src={`https://${product.image}`}
          alt="Image"
          width={150}
          height={150}
          className="aspect-[1/1] object-cover"
        />
        <div className="flex gap-1 py-2">
          {product.productColors.map(({ color }) => (
            <div
              key={color.hexa}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color.hexa }}
            />
          ))}
        </div>
      </div>

      <div id="info">
        <h2 className="font-medium">{product.name}</h2>
        <p className="text-gray-600">Brand: {item.product.brand}</p>
      </div>

      <div>
        <h3>Each</h3>
        <h3 className="font-bold">{product.price}$</h3>
      </div>

      <div>
        <p className="text-gray-600">Qty: {quantity}</p>
        <input
          className="border-2 border-gray-300 w-full"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <Button variant="outline">Edit</Button>
        <Button onClick={() => deleteFromCart(product.id)} variant="outline">
          Remove
        </Button>
      </div>
    </main>
  );
}

export default CheckoutItem;
