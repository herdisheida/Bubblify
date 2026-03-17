import { OrderResponse } from "@/types/orders"

const API_URL = "http://localhost:3500/api"


/**
 * Fetch all orders
 * GET - http://localhost:3500/api/orders
 */
export async function getOrders(): Promise<OrderResponse[]> {
  try {
    const res = await fetch(`${API_URL}/orders`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch orders');
    return res.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}

/**
 * Fetch a single order by telephone number
 * GET - http://localhost:3500/api/orders/telephone
 */
export async function getOrdersByTelephone(telephone: string): Promise<OrderResponse[]> {
  try {
    const res = await fetch(`${API_URL}/orders/${telephone}`, { cache: "no-store", })
    if (!res.ok) throw new Error("Failed to fetch orders")
    return res.json()
  } catch (error) {
    console.error(`Error fetching orders for telephone ${telephone}:`, error);
    return [];
  }
}