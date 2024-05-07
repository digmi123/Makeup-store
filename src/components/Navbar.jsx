import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
import SettingsIcon from "./SettingsIcon";
import CartIcon from "./CartIcon";

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
            <SettingsIcon />
          </label>

          <div className={styles.dropDownList}>
            <Link href={"/settings/custom"}>Settings</Link>
            <Link href={"/settings/custom"}>Settings</Link>
            <Link href={"/settings/custom"}>Settings</Link>
          </div>
        </div>

        <Link href="/checkout">
          <CartIcon />
        </Link>

        <div className={styles.navBtn}>
          <Link href="/api/auth/login?callbackUrl=/products">Login</Link>
        </div>

        <div className={styles.navBtn}>
          <Link href="/api/auth/signout?callbackUrl=/api/auth/login">
            SignOut
          </Link>
        </div>
      </div>
    </div>
  );
}
