"use server"

import { CartItem, Order } from "@/types/orders"


export async function submitOrder(data: Order, cart: CartItem[]) {
  try {
    const res = await fetch("http://localhost:3500/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        customer: data,
        items: cart,
      }),
    })

    // Check if the server rejected the POST request
    if (!res.ok) {
      const errorText = await res.text(); // read the server's error message
      console.error(`Server rejected order. Status: ${res.status}, Message: ${errorText}`);
      throw new Error("Failed to submit order");
    }

  } catch (error) {
    console.error("Error submitting order:", error);
    throw error;
  }
}