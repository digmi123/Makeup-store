import styles from "@/app/styles/product.module.css";

export default async function ProductCard({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.api_featured_image} alt="Image" />
      <h3>{item.name}</h3>

      <div className={styles.colorWrapper}>
        <div className={styles.color}></div>
      </div>

      <p className={styles.price}>{item.price}</p>
    </div>
  );
}
