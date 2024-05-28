import testLayoutStyles from "@/app/styles/testLayout.module.css";
import homeStyles from "@/app/styles/home.module.css";
import { items } from "../../src/data.json";
import FilterBar from "./FilterBar";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function LayoutComponent() {
  return (
    <div className={testLayoutStyles.testLayout} id="edit-layout">
      <Navbar />
      <div className={homeStyles.container}>
        <FilterBar />
        <div className={homeStyles.productsContainer}>
          {items.slice(-6).map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
