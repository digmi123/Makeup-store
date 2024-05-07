import styles from "@/app/styles/product.module.css";
import Image from "next/image";

export default async function ProductCard({ item }) {
  return (
    <div className={styles.container}>
      <Image
        src={`https://${item.api_featured_image}`}
        alt="Image"
        width={200}
        height={200}
      />
      <h3>{item.name}</h3>

      <div className={styles.colorsWrapper}>
        {item.product_colors.slice(0, 5).map(({ hex_value }) => (
          <div
            key={hex_value}
            className={styles.color}
            style={{ backgroundColor: hex_value }}
          />
        ))}
      </div>

      <p className={styles.price}>{item.price}</p>
    </div>
  );
}
