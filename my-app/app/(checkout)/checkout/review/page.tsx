'use client'

import { useCheckout } from "@/context/CheckoutContext"
import { useCart } from "@/context/CartContext"
import { submitOrder } from "@/lib/api/actions"
import { useRouter } from "next/navigation"
import BubbleCard from "@/components/BubbleCard"
import Image from "next/image"


export default function ReviewPage() {
  const { data } = useCheckout()
  const { cart } = useCart()
  const router = useRouter()

  async function handleConfirm() {
    await submitOrder(data, cart)
    router.push("/checkout/success")
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Review Order</h1>

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

        <h2 className="mt-4">Cart:</h2>
        <div className="grid grid-cols-4 gap-6">
        {cart.map((item) => (
            <div className="border p-4 rounded-lg content-center">
                <Image src={item.bubble.image} alt={item.bubble.name} width={150} height={150} />
                <h2 className="text-xl font-semibold">{item.bubble.name}</h2>
                <p>${item.bubble.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        ))}
        </div>
      </div>

      <button onClick={handleConfirm} className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors">
        confirm
      </button>
    </div>
  );
}