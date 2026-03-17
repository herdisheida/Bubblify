'use client'

import { useEffect } from "react"
import { useCart } from "@/context/CartContext"
import { useCheckout } from "@/context/CheckoutContext"

export default function SuccessPage() {
  const { reset } = useCheckout()
  const { clearCart } = useCart()

  useEffect(() => {
    reset()     // reset checkout data after submission
    clearCart() // clear cart after submission
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Order Successful</h1>
      <p>Your bubbles are on the way!</p>
    </div>
  )
}