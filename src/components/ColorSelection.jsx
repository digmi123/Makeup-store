import { useState } from "react";

export default function ColorSelection({ item }) {
  const [selectedColor, setSeclectedColor] = useState();

  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl">
        Color: {selectedColor ? selectedColor.colorName : "No color selected"}
      </div>
      <div
        id="color-wrapper"
        className="flex gap-2 items-center justify-center py-4"
      >
        {item.productColors.map(({ color }) => (
          <label
            key={`${item.name}-${color.hexa}`}
            className="w-9 h-9 rounded-[5px] shadow-lg cursor-pointer"
            style={{ backgroundColor: color.hexa }}
          >
            <input type="radio" hidden />
          </label>
        ))}
      </div>
    </div>
  );
}
