"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Bubble } from "@/types/bubbles"

interface CartItem {
  bubble: Bubble
  quantity: number
}

interface CheckoutContextType {
  cart: CartItem[]
  
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) { setCart(JSON.parse(stored)) }
  }, [])

  // save cart to localStorage (when cart changes)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // add bubble to cart: if exists, increase quantity; else add new item
  function addToCart(bubble: Bubble) {
    setCart((prev) => {
      const existing = prev.find((item) => item.bubble.id === bubble.id)

      if (existing) {
        return prev.map((item) =>
          item.bubble.id === bubble.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { bubble, quantity: 1 }]
    })
  }

  // remove bubble from cart (assume bubble quantity is 1)
  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.bubble.id !== id))
  }

  // increase quantity of bubble in cart
  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.bubble.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decreaseQuantity(id: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.bubble.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <CheckoutContext.Provider value={{ cart }}>
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