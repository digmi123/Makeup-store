import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductCard({ item }) {
  return (
    <Card className="h-full relative text-[--card-foreground]">
      <Image
        src={`https://${item.image}`}
        alt="Image"
        width={200}
        height={200}
        className="w-full h-full aspect-[3/4] object-cover"
      />
      <CardHeader className="absolute z-[2] top-0 left-0 right-0 backdrop-blur border rounded-b bg-background bg-opacity-25">
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between absolute z-[2] bottom-0 left-0 right-0 backdrop-blur border rounded-t p-3">
        <div className="flex gap-1">
          {item.productColors.map(({ color }, index) => (
            <div
              key={`${item.id}-${color.hexa}-${index}`}
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color.hexa }}
            />
          ))}
        </div>

        <p className="font-bold">{item.price.toString()}$</p>
      </CardFooter>
    </Card>
  );
}
