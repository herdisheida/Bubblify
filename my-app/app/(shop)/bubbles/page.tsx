// List of all bubbles - app/(shop)/bubbles/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { getBubbles } from '@/lib/api';
import { Bubble } from '@/types/bubbles';

export default async function BubblesPage() {
  const bubbles: Bubble[] = await getBubbles();

  return (
    <div className="">
      <h1 className="">Our Bubbles</h1>
      {/* grid: 3 columns */}
      <div className="">
        {bubbles.map((bubble: any) => (
          <Link href={`/bubbles/${bubble.id}`} key={bubble.id} className="">
            <div className="">
              <Image 
                src={bubble.image} 
                alt={bubble.name} 
                fill 
                className="" 
              />
            </div>
            <h2 className="">{bubble.name}</h2>
            <p className="">${bubble.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
