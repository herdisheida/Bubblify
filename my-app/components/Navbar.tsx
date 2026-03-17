"use client"

import Link from "next/link";
import "@/styles/global.css"


export default function Navbar() {
  return (
    <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* TODO find logo */}
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Bubblify</span>
        </p>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="hover:text-purple-400 font-bold">
                <Link href="/bubbles">Products</Link>
            </li>
            <li className="hover:text-purple-400 font-bold">
                <Link href="/bundles">Bundles</Link>
            </li>
            <li className="hover:text-purple-400 font-bold">
                <Link href="/about">About</Link>
            </li>
            <li className="hover:text-purple-400 font-bold">
                <Link href="/cart">Cart</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>

  )
}