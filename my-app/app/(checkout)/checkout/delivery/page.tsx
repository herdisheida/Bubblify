'use client' // TODO change thie / remove this

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
      <h1 className="text-3xl mb-6">Delivery Method</h1>

        {/* TODO
        In the first page of checkout (/checkout/delivery) the user needs to decide if
        he wants to arrange a store-pickup or have it delivered
        */}

        {/* TODO
        If he decides to have it delivered, the next page (/checkout/info) will ask to
        input the following information: name, address, city, telephone and postal
        code
        5. If he decides to arrange a store-pickup, the next page (/checkout/info) will
        ask to input only the name and telephone
        */}

        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 mr-4 transition-colors"
          onClick={() => handleSelect(pickup)}>
            Store Pickup
        </button>

        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 ml-4 transition-colors"
          onClick={() => handleSelect(delivery)}>
            Home Delivery
        </button>
    </div>
  );
}