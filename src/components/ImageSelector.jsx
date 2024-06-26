const imagesList = [
  {
    key: 1,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 2,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 3,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 4,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 5,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 6,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 7,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 8,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 9,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
  {
    key: 10,
    src: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704",
  },
];

import style from "@/app/styles/imageSelector.module.css";
import Image from "next/image";

export default function ImageSelector({ image }) {
  return (
    <div className="w-[500px] max-w-full">
      <Image
        className="w-full h-[400px]"
        src={`https://${image}`}
        alt="ProductImage"
        width={200}
        height={200}
      />
      <div className={style.carousel}>
        {imagesList.map((image) => {
          return (
            <Image
              key={image.key}
              className={style.imageCard}
              src={`https://${image.src}`}
              alt="ProductImage"
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </div>
  );
}
