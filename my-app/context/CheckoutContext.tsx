"use client"

import { createContext, useContext, useState } from "react"
import { Order, DeliveryMethod } from "@/types/orders"

interface CheckoutContextType {
  data: Order
  setMethod: (method: DeliveryMethod) => void
  setInfo: (info: Partial<Order>) => void
  reset: () => void
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Order>({
    method: "delivery",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    telephone: "",
  })

  function setMethod(method: DeliveryMethod) {
    setData((prev) => ({ ...prev, method }))
  }

  function setInfo(info: Partial<Order>) {
    setData((prev) => ({ ...prev, ...info }))
  }

  function reset() {
    setData({
      method: "delivery",
      name: "",
      address: "",
      city: "",
      postalCode: "",
      telephone: "",
    })
  }

  return (
    <CheckoutContext.Provider value={{ data, setMethod, setInfo, reset }}>
      {children}
    </CheckoutContext.Provider>
  )
}


export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider")
  }
  return context
}