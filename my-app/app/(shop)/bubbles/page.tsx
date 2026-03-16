// List of all bubbles - app/(shop)/bubbles/page.tsx

import { getBubbles } from '@/lib/api/bubbles';
import { Bubble } from '@/types/bubbles';
import BubbleCard from '@/components/BubbleCard';

export default async function BubblesPage() {
  const bubbles: Bubble[] = await getBubbles();

  return (
    <div>
      <h1>Bubble Products</h1>
      {/* grid: 3 columns */}
      <div>
        {bubbles.map((bubble: Bubble) => (
          <BubbleCard key={bubble.id} bubble={bubble} />
        ))}
      </div>
    </div>
  );
}
