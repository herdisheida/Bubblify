"use client"

import { useCart } from "@/context/CartContext"
import { Bubble } from "@/types/bubbles"
import { Bundle } from "@/types/bundles"

interface Props {
  bundle: Bundle
  bubbles: Bubble[]
}

export default function AddBundleToCartButton({ bundle, bubbles }: Props) {
  const { addToCart } = useCart()

  function handleAddBundle() {
    bundle.items.forEach((id) => {
      const bubble = bubbles.find((b) => b.id === id)
      if (bubble) addToCart(bubble)
    })
  }

  return (
    <button
      onClick={handleAddBundle}
      className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors      cursor-pointer hover:scale-101 hover:shadow-md">
        Add Bundle to Cart
    </button>
  )
}