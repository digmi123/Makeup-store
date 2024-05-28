import Image from "next/image";
import unicorn_logo from "@/assets/unicorn-logo.svg";
import star from "@/assets/star.svg";

export default function custom() {
  return (
    <main className="w-full p-4 grid grid-rows-[min-content_auto]">
      <div className="flex items-center border-b-2">
        <Image
          src={unicorn_logo}
          className="border-2 rounded-full "
          alt="Image"
          width={200}
          height={200}
        />
        <div className="p-5">
          <h1>L.C.D Construction</h1>
          <p>
            This company is focused on maintaining construction projects all
            over the world.
          </p>
          <div className="flex gap-2 py-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <Image
                  src={star}
                  alt="Star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
