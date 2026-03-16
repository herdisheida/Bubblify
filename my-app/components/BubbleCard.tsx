import { Bubble } from '@/types/bubbles';
import Image from 'next/image';
import Link from 'next/link';

export default function BubbleCard({ bubble }: { bubble: Bubble }) {
    return (
        <div>
            <Link href={`/bubbles/${bubble.id}`} key={bubble.id}>
            <div>
                <Image 
                src={bubble.image} 
                alt={bubble.name} 
                width={150}
                height={150}
                />
            </div>
            <h2>{bubble.name}</h2>
            <p>${bubble.price}</p>
            </Link>
        </div>
    )
}