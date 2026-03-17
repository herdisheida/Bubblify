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
      <h1 className="text-3xl pb-6 justify-self-center">{bubble.name}</h1>
      <Image
        src={bubble.image}
        alt={bubble.name}
        width={300}
        height={300}
        priority
        className="justify-self-center"
      />
      <p className="justify-self-center max-w-md text-center">{bubble.description}</p>
      <p className="justify-self-center py-4">${bubble.price}</p>
      {/* add to cart functionality */}
      <div className="justify-self-center">
        <AddToCartButton bubble={bubble} />
      </div>
    </div>
  );
}
