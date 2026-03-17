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
      className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors">
        Add Bundle to Cart
    </button>
  )
}