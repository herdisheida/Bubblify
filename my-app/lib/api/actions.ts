"use server"

import { Bubble } from "@/types/bubbles"
import { Order } from "@/types/orders"


export async function submitOrder(data: Order, cart: Bubble[]) {
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
}