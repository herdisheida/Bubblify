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
      className="bg-purple-500 text-white px-4 py-2 rounded">
        Add Bundle to Cart
    </button>
  )
}