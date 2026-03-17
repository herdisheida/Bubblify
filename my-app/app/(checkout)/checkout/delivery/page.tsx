'use client'

import { useCheckout } from "@/context/CheckoutContext"
import { useRouter } from "next/navigation"
import { DeliveryMethod } from "@/types/orders"

export default function DeliveryPage({}) {
  const { setMethod } = useCheckout()
  const router = useRouter()

  function handleSelect(method: DeliveryMethod) {
    setMethod(method)
    router.push("/checkout/info")
  }

  const delivery = "delivery" as DeliveryMethod;
  const pickup = "pickup" as DeliveryMethod;

  return (
    <div className="p-10">
      <h1 className="text-3xl pb-6">Checkout</h1>
      <h2 className="pb-6">Please choose a delivery method</h2>

      <div className="grid grid-rows-2 gap-8">
      <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl transition-colors
                          cursor-pointer hover:scale-101 hover:shadow-md
                          active:outline-2 active:outline-offset-2 active:outline-indigo-500 active:opacity-80"
        onClick={() => handleSelect(pickup)}>
          Store Pickup
      </button>

      <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl transition-colors
                          cursor-pointer hover:scale-101 hover:shadow-md
                          active:outline-2 active:outline-offset-2 active:outline-indigo-500 active:opacity-80"
        onClick={() => handleSelect(delivery)}>
          Home Delivery
      </button>
      </div>
    </div>
  );
}