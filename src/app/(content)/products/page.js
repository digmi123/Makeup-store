import { items } from "@/data.json";
import ProductCard from "@/components/ProductCard";
import styles from "@/app/styles/home.module.css";
import FilterBar from "@/components/FilterBar.jsx";
import Link from "next/link";

export default function Home({ searchParams }) {
  const filteredItems = items.filter((item) =>
    Object.entries(searchParams || {}).every(([key, list]) =>
      list.split(",").includes(item[key])
    )
  );

  return (
    <div className={styles.container}>
      <FilterBar />
      <div className={styles.productsContainer}>
        {filteredItems.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className={styles.product}
          >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
