// Bundle lis - http://localhost:3000/bundles

import { getBundles } from "@/lib/api/bundles";
import { Bundle } from "@/types/bundles";
import BundleCard from '@/components/BundleCard';

export default function BundlesPage({}) {
  const bundles: Bundle[] = getBundles();

  return (
    <div>

      <h1>Bundle Page</h1>
      {/* List of bundles */}
      <div>
        {bundles.map((bundle) => (
          <BundleCard key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </div>
  );
}   