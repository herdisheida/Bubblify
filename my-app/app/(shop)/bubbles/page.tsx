// List of all bubbles - app/(shop)/bubbles/page.tsx

import Image from 'next/image';
import Link from 'next/link';

async function getBubbles() {
  const res = await fetch('http://localhost:3500/api/bubbles', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch bubbles');
  return res.json();
}

export default async function BubblesPage() {
  const bubbles = await getBubbles();

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
