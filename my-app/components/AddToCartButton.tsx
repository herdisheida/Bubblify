"use client"

import { Bubble } from "@/types/bubbles"
import { useCart } from "@/context/CartContext"

export default function AddToCartButton({ bubble }: { bubble: Bubble }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(bubble)}
      className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors      cursor-pointer hover:scale-101 hover:shadow-md">
      Add to Cart
    </button>
  )
}