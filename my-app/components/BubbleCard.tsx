import { Bubble } from '@/types/bubbles';
import Image from 'next/image';
import Link from 'next/link';

export default function BubbleCard({ bubble }: { bubble: Bubble }) {
    return (
        <Link href={`/bubbles/${bubble.id}`} key={bubble.id}>
            <div className="border p-4 rounded-xl hover:scale-101 hover:shadow-md transition-transform cursor-pointer">
                <div className="justify-self-center">
                    <Image 
                    src={bubble.image} 
                    alt={bubble.name} 
                    width={150}
                    height={150}
                    priority
                    />
                </div>
                <h2 className="text-xl font-semibold justify-self-center">{bubble.name}</h2>
                <p className="justify-self-center">${bubble.price}</p>
            </div>
        </Link>

    )
}