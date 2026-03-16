import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <h1>Navbar</h1>
        <Link href="/bubbles">Products</Link>
        <Link href="/bundles">Bundles</Link>
        <Link href="/about">About us</Link>
        <Link href="/cart">Cart</Link>
    </nav>
  )
}