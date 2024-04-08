import Link from "next/link";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/authOptions";
import styles from "@/app/styles/navbar.module.css";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <div className={styles.container}>
      <div className={styles.navBtn}>
        <Link href="/products">Products</Link>
      </div>
      <div className={styles.navBtn}>
        {session?.user ? (
          <Link href="/api/auth/signout">SignOut</Link>
        ) : (
          <Link href="/api/auth/login?callbackUrl=/products">Login</Link>
        )}
      </div>
    </div>
  );
}
