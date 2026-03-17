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
      <h1 className="text-3xl pb-6">Delivery Method</h1>
      <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl mt-4 mr-4 transition-colors
                          cursor-pointer hover:scale-101 hover:shadow-md
                          focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:bg-indigo-700"
        onClick={() => handleSelect(pickup)}>
          Store Pickup
      </button>

      <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl mt-4 ml-4 transition-colors
                          cursor-pointer hover:scale-101 hover:shadow-md
                          focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 active:bg-indigo-700"
        onClick={() => handleSelect(delivery)}>
          Home Delivery
      </button>
    </div>
  );
}