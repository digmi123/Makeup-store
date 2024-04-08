import styles from "@/app/styles/product.module.css";

export default async function ProductCard({ item }) {
  console.log({ item });
  return (
    <div className={styles.container}>
      <img src={item.api_featured_image} alt="Image" />
      <h3>{item.name}</h3>

      <div className={styles.colorsWrapper}>
        {item.product_colors.slice(0, 5).map(({ hex_value, colour_name }) => (
          <div
            key={item.name}
            className={styles.color}
            style={{ backgroundColor: hex_value }}
          />
        ))}
      </div>

      <p className={styles.price}>{item.price}</p>
    </div>
  );
}
