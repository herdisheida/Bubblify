// bubble details - app/(shop)/bubbles/[id]/page.tsx

import Image from "next/image"
import { getBubble } from "@/lib/api/bubbles"
import { Bubble } from "@/types/bubbles"


interface PageProps {
  params: {
    id: string;
  }
}

export default async function BubbleDetails({ params }: PageProps) {
  const { id } = await params
  const bubble: Bubble = await getBubble(id)

  return (
    <div>
      <h1>{bubble.name}</h1>
      <Image
        src={bubble.image}
        alt={bubble.name}
        width={300}
        height={300}
      />
      <p>{bubble.description}</p>
      <p>${bubble.price}</p>
      {/* add to cart functionality */}
      <button>Add to Cart</button>
    </div>
  );
}
