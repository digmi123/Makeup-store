import { items } from "@/data.json";
import Image from "next/image";

export default function RelatedItems() {
  return (
    <div className="px-[10px] pt-[5px] border-2 border-gray-300 w-full box-border">
      <h1 className="text-xl font-bold">Related items</h1>
      <div className="p-[10px] flex gap-5 overflow-scroll">
        {items.slice(0, 10).map((item) => {
          return (
            <div
              className="cursor-pointer flex flex-col p-[10px] shadow-md rounded-2xl"
              key={item.id}
            >
              {/* <Image
                src={item.api_featured_image}
                width={500}
                height={500}
                alt="relatedImage"
              /> */}
              <img
                className="w-36 h-36 rounded-2xl"
                src={item.image}
                alt="relatedImage"
              />
              <h3>{item.name}</h3>
              <p>11 sold</p>
              <p>{item.price}$</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
