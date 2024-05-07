import ImageSelector from "@/components/ImageSelector";
import RelatedItems from "@/components/RelatedItems";
import ShippingOptions from "@/components/ShippingOptions";
import { items } from "@/data.json";
import styles from "@/app/styles/productPage.module.css";
import QuantitySection from "@/components/QuantitySection";

const sizeList = ["XL", "L", "M", "S"];

const getProduct = async (productId) => {
  return items.find((item) => item.id === Number(productId));
};

export default async function Product({ params }) {
  const itemId = params.id;
  const item = await getProduct(itemId);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.productContainer}>
        <ImageSelector itemImage={item?.api_featured_image} />

        <div className={styles.productBar}>
          <h2>{item.name}</h2>
          <div>
            <p className={styles.price}>
              {item.price} {item.price_sign}
            </p>
            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.sizeIndicator}>
            <div className={styles.selectedSize}>Size: SelectedSize</div>

            <div className={styles.sizesContainer}>
              {sizeList.map((size) => (
                <div key={size} className={styles.size}>
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.colorIndicator}>
            <div className={styles.selectedColor}>Color: selectedColor</div>
            <div className={styles.colorsWrapper}>
              {item.product_colors.slice(0, 5).map(({ hex_value }) => (
                <div
                  key={`${item.name}-${hex_value}`}
                  className={styles.color}
                  style={{ backgroundColor: hex_value }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.orderBar}>
          <ShippingOptions />
          <QuantitySection product={item} />
        </div>
      </div>
      <RelatedItems />
    </div>
  );
}
