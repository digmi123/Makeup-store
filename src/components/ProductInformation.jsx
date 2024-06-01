"use client";
import { useState } from "react";
import QuantitySection from "./QuantitySection";
import ShippingOptions from "./ShippingOptions";
import ColorSelection from "./ColorSelection";

export default function ProductInformation({ item }) {
  return (
    <form className="flex flex-wrap gap-20 py-4">
      <div className="flex flex-col items-start gap-[30px]">
        <h2 className="text-3xl font-bold">{item.name}</h2>
        <div>
          <p className="py-[20px] text-3xl font-medium">
            {item.price.toString()}$
          </p>
          <p className="max-w-xs text-xl">{item.description}</p>
        </div>

        <ColorSelection item={item} />
      </div>

      <div className="sticky flex flex-col items-start">
        <ShippingOptions />
        <QuantitySection product={item} />
      </div>
    </form>
  );
}
