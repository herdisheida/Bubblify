"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { CartItem } from "@/types/orders"

interface Props {
  items: CartItem[]
}

export default function AddOrderToCartButton({ items }: Props) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  
    function handleAddOrder() {
        // loop through the old order items
        items.forEach((item) => {
            for (let i = 0; i < item.quantity; i++) { addToCart(item.bubble) } // add quantity of each bubble
        })
        setIsAdded(true) // show checkout btn
    }

  return (
    <div className="flex flex-col gap-3 max-w-xs ">
      <button
        onClick={handleAddOrder}
        className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors
                    cursor-pointer hover:scale-101 hover:shadow-md
                    active:outline-2 active:outline-offset-2 active:outline-violet-500 active:opacity-80">
          Add Order to Cart
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