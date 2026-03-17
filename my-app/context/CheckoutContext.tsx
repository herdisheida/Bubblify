"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Bubble } from "@/types/bubbles"
import { useCart } from "./CartContext"

interface CartItem {
  bubble: Bubble
  quantity: number
}

interface CheckoutInfo {
  name:       string;
  telephone:  string;

  address?:    string; // optional: if delivery
  city?:       string; // optional: if delivery
  postalCode?: string; // optional: if delivery
}

interface CheckoutContextType {
  cart: CartItem[]
  checkoutInfo: CheckoutInfo | null
  updateCheckoutInfo: (info: CheckoutInfo) => void
  submitOrder: () => Promise<void>
}


const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const { cart } = useCart()
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo | null>(null)

  function updateCheckoutInfo(info: CheckoutInfo) {
    setCheckoutInfo(info)
  }


  return (
    <CheckoutContext.Provider value={{ cart, checkoutInfo: checkoutInfo || null, updateCheckoutInfo, submitOrder: async () => {}}}>
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