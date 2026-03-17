"use server"

import { CartItem, Order } from "@/types/orders"


export async function submitOrder(data: Order, cart: CartItem[]) {
  try {
    await fetch("http://localhost:3500/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: data,
        items: cart,
      }),
    })
  } catch (error) {
    console.error("Error submitting order:", error);
    throw error;
  }
}