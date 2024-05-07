import styles from "@/app/styles/profile.module.css";
import Image from "next/image";

export default function custom() {
  return (
    <main className={styles.container}>
      <div className={styles.bioContainer}>
        <Image
          className={styles.profileImage}
          src={
            "https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/949/original/data?1514082704"
          }
          alt="Image"
          width={200}
          height={200}
        />
        <div className={styles.bioContent}>
          <h1 className={styles.name}>L.C.D Construction</h1>
          <p className={styles.description}>
            This company is focused on maintaining construction projects all
            over the world.
          </p>
        </div>
      </div>
    </main>
  );
}
