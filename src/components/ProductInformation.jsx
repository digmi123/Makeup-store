"use client";
import { useState } from "react";
import QuantitySection from "./QuantitySection";
import ShippingOptions from "./ShippingOptions";

export default function ProductInformation({ item }) {
  const [selectedColor, setSeclectedColor] = useState();

  const handleSelectColor = (color) => {
    const colorWrapper = document.getElementById("color-wrapper");
    colorWrapper.classList.remove("error");
    setSeclectedColor(color);
  };

  return (
    <div className="flex flex-wrap gap-20 py-4">
      <div className="flex flex-col items-start gap-[30px]">
        <h2 className="text-3xl font-bold">{item.name}</h2>
        <div>
          <p className="py-[20px] text-3xl font-medium">
            {item.price.toString()}$
          </p>
          <p className="max-w-xs text-xl">{item.description}</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-2xl">
            Color:{" "}
            {selectedColor ? selectedColor.colorName : "No color selected"}
          </div>
          <div
            id="color-wrapper"
            className="flex gap-2 items-center justify-center py-4"
          >
            {item.productColors.map(({ color }) => (
              <div
                key={`${item.name}-${color.hexa}`}
                className="w-9 h-9 rounded-[5px] shadow-lg cursor-pointer"
                style={{ backgroundColor: color.hexa }}
                onClick={() => {
                  handleSelectColor(color);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sticky flex flex-col items-start">
        <ShippingOptions />
        <QuantitySection product={item} color={selectedColor} />
      </div>
    </div>
  );
}
