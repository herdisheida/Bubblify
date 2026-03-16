import { Order } from "@/types/orders"

const API_URL = "http://localhost:3500/api"


export async function getOrders(): Promise<Order[] | undefined> {
  const res = await fetch('http://localhost:3500/api/orders', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}

export async function getOrder(telephone: string): Promise<Order | undefined> {
  const res = await fetch(`${API_URL}/orders/${telephone}`, { cache: "no-store", })
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}