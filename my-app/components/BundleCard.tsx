import { Bundle } from '@/types/bundles';
import { useState } from 'react';


export default function BundleCard({ bundle }: { bundle: Bundle }) {
    const [inCart, setInCart] = useState(false);

    function toggleCart() {
        setInCart(!inCart);
    }

    return (
        <div>
            <h2>{bundle.name}</h2>
            <p>Items: {bundle.items.join(', ')}</p>
            <button onClick={toggleCart}>
                {inCart ? 'Remove from Cart' : 'Add Bundle to Cart'}
            </button>
        </div>
    )
}