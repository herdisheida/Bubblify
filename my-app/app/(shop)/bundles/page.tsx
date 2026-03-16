// Bundle lis - http://localhost:3000/bundles

import { getBundles } from "@/lib/api/bundles";
import { getBubbles } from "@/lib/api/bubbles";
import { Bundle } from "@/types/bundles";
import { Bubble } from "@/types/bubbles";


export default async function BundlesPage({}) {
  const bundles: Bundle[] = await getBundles();
  const bubbles: Bubble[] = await getBubbles();

  return (
    <div>

      <h1>Bundles</h1>
      {/* List of bundles */}
      <div>
        {bundles.map((bundle) => {
          
          // bubbles in the bundle
          const bubbleMap = Object.fromEntries( bubbles.map((b) => [b.id, b]) );
          const bundleBubbles = bundle.items.map((id) => bubbleMap[id])

          return (
            <div key={bundle.id}>
              <h2>{bundle.name}</h2>

              <ul>
                {/* bubble names in the bundle */}
                {bundleBubbles.map((bubble) =>
                  bubble ? <li key={bubble.id}>{bubble.name}</li> : null
                )}
              </ul>

            {/* TODO add to cart functionality */}
              <button>Add Bundle to Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}   