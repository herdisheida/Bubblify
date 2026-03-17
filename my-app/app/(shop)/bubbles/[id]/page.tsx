// bubble details - app/(shop)/bubbles/[id]/page.tsx

import Image from "next/image"
import { getBubble } from "@/lib/api/bubbles"
import { Bubble } from "@/types/bubbles"
import AddToCartButton from "@/components/AddToCartButton"

interface PageProps {
  params: {
    id: string;
  }
}

export default async function BubbleDetails({ params }: PageProps) {
  const { id } = await params
  const bubble: Bubble = await getBubble(id)

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">{bubble.name}</h1>
      <Image
        src={bubble.image}
        alt={bubble.name}
        width={300}
        height={300}
        priority
      />
      <p>{bubble.description}</p>
      <p>${bubble.price}</p>
      {/* add to cart functionality */}
      <AddToCartButton bubble={bubble} />
    </div>
  );
}
