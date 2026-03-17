// Bundle lis - http://localhost:3000/bundles

import { getBundles } from "@/lib/api/bundles";
import { getBubbles } from "@/lib/api/bubbles";
import { Bundle } from "@/types/bundles";
import { Bubble } from "@/types/bubbles";
import BundleCard from "@/components/BundleCard";



export default async function BundlesPage({}) {
  const bundles: Bundle[] = await getBundles();
  const bubbles: Bubble[] = await getBubbles();

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Bundles</h1>
      {/* List of bundles */}
      <div className="grid grid-cols-3 gap-6">
        {bundles.map((bundle) => (
          <BundleCard
            key={bundle.id}
            bundle={bundle}
            bubbles={bubbles}
          />
        ))}
      </div>
    </div>
  );
}   