import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import settingsIcon from "../assets/settings.svg";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBtn}>
        <Link href="/products">Products</Link>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.settingsWrapper}>
          <label className={styles.dropDown}>
            <input type="checkbox" hidden />
            <Image
              src={settingsIcon}
              alt="Settings-dropdown"
              width={50}
              height={50}
            />
          </label>

          <div className={styles.dropDownList}>
            <Link href={"/settings/custom"}>Settings</Link>
            <Link href={"/settings/custom"}>Settings</Link>
            <Link href={"/settings/custom"}>Settings</Link>
          </div>
        </div>

        <div className={styles.navBtn}>
          <Link href="/api/auth/login?callbackUrl=/products">Login</Link>
        </div>

        <div className={styles.navBtn}>
          <Link href="/api/auth/signout">SignOut</Link>
        </div>
      </div>
    </div>
  );
}
