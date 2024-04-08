import { items } from "@/data.json";
import ProductCard from "@/components/ProductCard";
import styles from "@/app/styles/home.module.css";

export default async function Home() {
  return (
    <div className={styles.productsContainer}>
      {items.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </div>
  );
}
