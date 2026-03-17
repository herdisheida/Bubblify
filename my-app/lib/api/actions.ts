"use server"

import { CartItem, Order } from "@/types/orders"


export async function submitOrder(data: Order, cart: CartItem[]) {
  try {
    if (!data.telephone) { throw new Error("Telephone number is required"); }
  
    // POST req
    const res = await fetch(`http://localhost:3500/api/orders/${data.telephone}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        customer: data,
        items: cart,
      }),
    })

    // Check if the server rejected the POST request
    if (!res.ok) {
      console.error(`Server rejected order. Status: ${res.status}`);
      throw new Error("Failed to submit order");
    }

  } catch (error) {
    console.error("Error submitting order:", error);
    throw error;
  }
}