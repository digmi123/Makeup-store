import styles from "@/app/styles/shippingOptions.module.css";

const shippingOptions = [
  {
    title: "Pickup",
    description: "Ready within 2 hours",
    information:
      "Pickup at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
  {
    title: "Delivery",
    description: "as soon as possible",
    information:
      "Delivery at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
  {
    title: "Shipping",
    description: "Get it in 7 days to your address",
    information:
      "Shipping at the store located at 1912 S Jacaranda St, Anaheim, CA 92805",
  },
];

export default function ShippingOptions() {
  return (
    <div className={styles.shippingContainer}>
      <h2>Delivery options</h2>

      <div className={styles.cardsContainer}>
        {shippingOptions.map((option) => {
          return (
            <div className={styles.card} key={option.title}>
              <div className={styles.top}>
                <h3>{option.title}</h3>
              </div>
              <p className={styles.description}>{option.description}</p>
            </div>
          );
        })}
      </div>
      {/* <p class="information">{selectedOption.information}</p> */}
    </div>
  );
}
