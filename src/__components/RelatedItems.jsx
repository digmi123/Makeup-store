import { items } from "@/data.json";
import styles from "@/app/styles/relatedItems.module.css";
import Image from "next/image";

export default function RelatedItems() {
  return (
    <div className={styles.relatedItemsSection}>
      <h1 className={styles.relatedTitle}>Related items</h1>
      <div className={styles.container}>
        {items.map((item) => {
          console.log({ item });
          return (
            <div className={styles.relatedCard} key={item.id}>
              {/* <Image
                src={item.api_featured_image}
                width={500}
                height={500}
                alt="relatedImage"
              /> */}
              <img
                className={styles.relatedImage}
                src={item.api_featured_image}
                alt="relatedImage"
              />
              <h3>{item.name}</h3>
              <p>11 sold</p>
              <p className={styles.price}>
                {item.price} {item.price_sign}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
