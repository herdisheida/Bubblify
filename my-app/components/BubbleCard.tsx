import { Bubble } from '@/types/bubbles';
import Image from 'next/image';
import Link from 'next/link';

export default function BubbleCard({ bubble }: { bubble: Bubble }) {
    return (
        <div className="border p-4 rounded-lg">
            <Link href={`/bubbles/${bubble.id}`} key={bubble.id}>
            <div>
                <Image 
                src={bubble.image} 
                alt={bubble.name} 
                width={150}
                height={150}
                priority
                />
            </div>
            <h2 className="text-xl font-semibold">{bubble.name}</h2>
            <p>${bubble.price}</p>
            </Link>
        </div>
    )
}