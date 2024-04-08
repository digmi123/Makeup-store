import { cookies } from "next/headers";
import styles from "@/app/styles/login.module.css";

import authOptions from "../[...nextauth]/authOptions";

//making the callback only when the csrfToken is available if there is not csrf token the page callback is jibrish.
export default async function login() {
  const { providers } = authOptions;

  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.csrf-token");
  const csrfToken = token?.value.split("|")[0];
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Makeup yourself</h1>
      <div className={styles.wrapper}>
        <form
          method="post"
          action="/api/auth/callback/credentials?callbackUrl=/products"
          className={styles.formContainer}
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className={styles.inputWrapper}>
            <label>Your email</label>
            <input name="email" type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <label>Your Password</label>
            <input name="password" type="password" />
          </div>

          <button className={styles.submitBtn} type="submit">
            Sign in
          </button>

          <div>
            {Object.values(providers).map((provider) => {
              return (
                <div key={provider.name}>
                  <button>Sign in with {provider.name}</button>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
