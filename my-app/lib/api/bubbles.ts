import { Bubble } from "@/types/bubbles"

const API_URL = "http://localhost:3500/api"


export async function getBubbles(): Promise<Bubble[]> {
  const res = await fetch('http://localhost:3500/api/bubbles', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch bubbles');
  return res.json();
}

export async function getBubble(id: string): Promise<Bubble> {
  const res = await fetch(`${API_URL}/bubbles/${id}`, { cache: "no-store", })
  if (!res.ok) throw new Error("Failed to fetch bubble");
  return res.json();
}