import { Bundle } from "@/types/bundles"
import { Bubble } from "@/types/bubbles"
import AddBundleToCartButton from "@/components/AddBundleToCartButton"
import Image from "next/image"

/**
 * Interface defining the props for the BundleCard component
 */
interface BundleCardProps {
  bundle: Bundle     // the bundle to be displayed in the card
  bubbles: Bubble[]  // list of all bubbles - used to find corresponding bubble details based on bundle item IDs
}

export default function BundleCard({ bundle, bubbles }: BundleCardProps) {
  
  // create lookup map
  const bubbleMap = Object.fromEntries(bubbles.map((b) => [b.id, b]))

  // get bubbles inside bundle
  const bundleBubbles = bundle.items.map((id) => bubbleMap[id])

  return (
    <div className="border p-4 rounded-lg hover:scale-101 hover:shadow-md transition-transform">
      <h2 className="text-xl font-semibold justify-self-center pb-4 pt-2">{bundle.name}</h2>

      <ul className="mt-2">
        {/* list of bubble names in the bundle */}
        {bundleBubbles.map((bubble) =>
          bubble ? 
          (
            <div key={bubble.id} className="flex items-center gap-2">
                <Image src={bubble.image} alt={bubble.name} width={50} height={50} priority />
                <li key={bubble.id}>
                  {bubble.name}
                </li>
            </div>
          ) : null
        )}
      </ul>

      <div className="mt-4 justify-self-center">
        <AddBundleToCartButton bundle={bundle} bubbles={bubbles} />
      </div>
    </div>
  )
}