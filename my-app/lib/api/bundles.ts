import { Bundle } from "@/types/bundles"

const API_URL = "http://localhost:3500/api"

export async function getBundles(): Promise<Bundle[]> {
  const res = await fetch('http://localhost:3500/api/bundles', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch bundles');
  return res.json();
}
