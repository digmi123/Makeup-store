import Link from "next/link";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import styles from "@/app/styles/navbar.module.css";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <div className={styles.container}>
      <div className={styles.navBtn}>
        <Link href="/users/view">Users</Link>
      </div>
      <div className={styles.navBtn}>
        {session?.user.role === "admin" && (
          <Link href="/users/add">Add User</Link>
        )}
      </div>

      <div className={styles.navBtn}>
        <Link href="/api/auth/signout?callbackUrl=/api/auth/signin">
          SignOut
        </Link>
      </div>
    </div>
  );
}
