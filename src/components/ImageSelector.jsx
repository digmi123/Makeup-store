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

export default function ImageSelector({ itemImage }) {
  return (
    <div className={style.container}>
      <img className={style.viewImage} src={itemImage} alt="ProductImage" />
      <div className={style.carousel}>
        {imagesList.map((image) => {
          return (
            <img
              className={style.imageCard}
              selected="selectedImage.key === image.key"
              key="index"
              src={image.src}
              alt="ProductImage"
            />
          );
        })}
      </div>
    </div>
  );
}
