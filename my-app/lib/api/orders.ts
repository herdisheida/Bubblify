import { OrderResponse } from "@/types/orders"

const API_URL = "http://localhost:3500/api"


/**
 * Fetch all orders
 * GET - http://localhost:3500/api/orders
 */
export async function getOrders(): Promise<OrderResponse[]> {
  const res = await fetch(`${API_URL}/orders`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}

/**
 * Fetch a single order by telephone number
 * GET - http://localhost:3500/api/orders/telephone
 */
export async function getOrdersByTelephone(telephone: string): Promise<OrderResponse[]> {
  const res = await fetch(`${API_URL}/orders/${telephone}`, { cache: "no-store", })
  if (!res.ok) throw new Error("Failed to fetch orders")
  return res.json()
}