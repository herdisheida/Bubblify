"use client"

import Link from "next/link"
import { useState } from "react"

import { useCart } from "@/context/CartContext"
import { Bubble } from "@/types/bubbles"
import { Bundle } from "@/types/bundles"

interface Props {
  bundle: Bundle
  bubbles: Bubble[]
}

export default function AddBundleToCartButton({ bundle, bubbles }: Props) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  function handleAddBundle() {
    bundle.items.forEach((id) => {
      const bubble = bubbles.find((b) => b.id === id)
      if (bubble) addToCart(bubble)
    })
    setIsAdded(true) // show the checkout button
  }

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button
        onClick={handleAddBundle}
        className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors
                    cursor-pointer hover:scale-101 hover:shadow-md
                    active:outline-2 active:outline-offset-2 active:outline-violet-500 active:opacity-80">
          Add Bundle to Cart
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