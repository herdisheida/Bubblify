"use client"

import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav>
        <div>
            {/* TODO find logo */}
            <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </div>

        <div>
            <Link href="/bubbles">Products</Link>
            <Link href="/bundles">Bundles</Link>
            <Link href="/about">About us</Link>
            <Link href="/cart">Cart</Link>
        </div>
    </nav>
  )
}