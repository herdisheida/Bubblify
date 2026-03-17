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

// When a selection is finished, he gets an option to go to the checkout. The
// checkout should also be available in the cart
        // TODO so when onclick --- make text or button appear ( go to checkout ?)


  return (
    <button
      onClick={handleAddBundle}
      className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors
                  cursor-pointer hover:scale-101 hover:shadow-md
                  active:outline-2 active:outline-offset-2 active:outline-violet-500 active:opacity-80">
        Add Bundle to Cart
    </button>
  )
}