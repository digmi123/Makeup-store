import Link from "next/link";
import CartIcon from "./CartIcon";
import SettingsMenu from "./SettingsMenu";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex z-[3] items-center justify-between px-4 py-6 rounded-b-md backdrop-blur-md bg-[--navbar-background] text-[--navbar-foreground]">
      <div className="cursor-pointer text-inherit px-4 text-lg font-bold uppercase">
        {/* TODO: border: 1px solid color-mix(in srgb, var(--background-color), var(--text-color)); on upper div */}
        <Link href="/products" className="text-inherit">
          Products
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <SettingsMenu />

        <Link href="/checkout">
          <CartIcon />
        </Link>

        <div className="cursor-pointer text-inherit px-4 text-lg font-bold uppercase">
          <Link href="/api/auth/login?callbackUrl=/products">Login</Link>
        </div>

        <div className="cursor-pointer text-inherit px-4 text-lg font-bold uppercase">
          <Link href="/api/auth/signout?callbackUrl=/api/auth/login">
            SignOut
          </Link>
        </div>
      </div>
    </div>
  );
}
