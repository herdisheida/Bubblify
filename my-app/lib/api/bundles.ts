import { Bundle } from "@/types/bundles"

const API_URL = "http://localhost:3500/api"

/**
 * Fetch all bundles
 * GET - http://localhost:3500/api/bundles
 */
export async function getBundles(): Promise<Bundle[]> {
  try {
    const res = await fetch(`${API_URL}/bundles`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch bundles');
    return res.json();
  } catch (error) {
    console.error("Error fetching bundles:", error);
    return [];
  }
}
