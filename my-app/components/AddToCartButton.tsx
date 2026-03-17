"use client"

import Link from "next/link"
import { useState } from "react"

import { Bubble } from "@/types/bubbles"
import { useCart } from "@/context/CartContext"


export default function AddToCartButton({ bubble }: { bubble: Bubble }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

// When a selection is finished, he gets an option to go to the checkout. The
// checkout should also be available in the cart
        // TODO so when onclick --- make text or button appear ( go to checkout ?)
  function handleAdd() {
      addToCart(bubble)
      setIsAdded(true) // Show the checkout button
    }

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button
        onClick={handleAdd}
        className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors
                    cursor-pointer hover:scale-101 hover:shadow-md
                    active:outline-2 active:outline-offset-2 active:outline-violet-500 active:opacity-80">
        Add to Cart
      </button>

      {isAdded && (
        <Link 
          href="/checkout/delivery" 
          className="bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-xl transition-colors shadow-md">
          Go to Checkout
        </Link>
      )}
    </div>
  )
}