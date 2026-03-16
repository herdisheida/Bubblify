import { Bubble } from '@/types/bubbles';
import Image from 'next/image';
import Link from 'next/link';

export default function BubbleCard({ bubble, key }: { bubble: Bubble, key: number }) {
    return (
        <div>
            <Link href={`/bubbles/${bubble.id}`} key={key}>
            <div>
                <Image 
                src={bubble.image} 
                alt={bubble.name} 
                fill 
                
                />
            </div>
            <h2>{bubble.name}</h2>
            <p>${bubble.price}</p>
            </Link>
        </div>
    )
}