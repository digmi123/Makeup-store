import ImageSelector from "@/__components/ImageSelector";
import RelatedItems from "@/__components/RelatedItems";
import ShippingOptions from "@/__components/ShippingOptions";
import { items } from "@/data.json";
import styles from "@/app/styles/productPage.module.css";

const sizeList = ["XL", "L", "M", "S"];

const getProduct = async (productId) => {
  return items.find((item) => item.id === Number(productId));
};

export default async function Product({ params }) {
  const itemId = params.id;
  const item = await getProduct(itemId);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.productContainer} key="itemId">
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
                  key={item.name}
                  className={styles.color}
                  style={{ backgroundColor: hex_value }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.orderBar}>
          <ShippingOptions />
          <div className={styles.actionSection}>
            <div className={styles.quantitySection}>
              <h3>Quantity</h3>
              <div className={styles.quantityActions}>
                <button className={styles.updateButton}>+</button>
                <p>quantity</p>
                <button className={styles.updateButton}>-</button>
              </div>
              <p>Available pieces: 15</p>
            </div>

            <div className={styles.buttonsSection}>
              <button className={styles.btnPrimary}>Add to bag</button>
            </div>
          </div>
        </div>
      </div>
      <RelatedItems />
    </div>
  );
}
