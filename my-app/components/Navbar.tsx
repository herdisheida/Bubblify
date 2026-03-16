"use client"

import Link from "next/link";
import Image from "next/image";
import "@/styles/global.css"


export default function Navbar() {
  return (
        // <nav>
        // <div>
        //     {/* TODO find logo */}
        //     <Image src="/logo.png" alt="Logo" width={100} height={50} />
        // </div>

        // <div>
        //     <Link href="/bubbles">Products</Link>
        //     <Link href="/bundles">Bundles</Link>
        //     <Link href="/about">About us</Link>
        //     <Link href="/cart">Cart</Link>
        // </div>
        // </nav>
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* TODO find logo */}
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Bubblify</span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
                <Link href="/bubbles" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Products</Link>
            </li>
            <li>
                <Link href="/bundles" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Bundles</Link>
            </li>
            <li>
                <Link href="/about" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
                <Link href="/cart" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Cart</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>

  )
}