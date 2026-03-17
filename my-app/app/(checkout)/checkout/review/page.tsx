'use client'

import { useCheckout } from "@/context/CheckoutContext"
import { useCart } from "@/context/CartContext"
import { submitOrder } from "@/lib/api/actions"
import { useRouter } from "next/navigation"
import Image from "next/image"

import LoadingSpinner from "@/components/ui/LoadingSpinner"
import { useState } from "react"


export default function ReviewPage() {
  const { data } = useCheckout()
  const { cart } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleConfirm() {
    setIsSubmitting(true)

    try {
      await submitOrder(data, cart)
      router.push("/checkout/success")
    } catch (error) {
      console.error("Error submitting order:", error)
      alert("Failed to submit order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl pb-6">Review Order</h1>

      <div className="mt-6">
        <p>Name: {data.name}</p>
        <p>Telephone: {data.telephone}</p>
        {data.method === "delivery" && (
          <>
            <p>Address: {data.address}</p>
            <p>City: {data.city}</p>
            <p>Postal Code: {data.postalCode}</p>
          </>
          )}

        <h2 className="py-4">Cart:</h2>
        <div className="grid grid-cols-4 gap-6">
        {cart.map((item) => (
            <div key={item.bubble.id} className="border p-4 rounded-xl content-center">
                <Image className="justify-self-center" src={item.bubble.image} alt={item.bubble.name} width={150} height={150} priority />
                <h2 className="text-xl font-semibold justify-self-center">{item.bubble.name}</h2>
                <p className="justify-self-center">${item.bubble.price}</p>
                <p className="justify-self-center">Quantity: {item.quantity}</p>
            </div>
        ))}
        </div>
      </div>
      
      <button onClick={handleConfirm}
              disabled={isSubmitting}
              className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors
                          cursor-pointer hover:scale-101 hover:shadow-md
                          active:outline-2 active:outline-offset-2 active:outline-indigo-500 active:opacity-80">
        confirm
      </button>

      {isSubmitting ? <LoadingSpinner /> : null}
    </div>
  );
}