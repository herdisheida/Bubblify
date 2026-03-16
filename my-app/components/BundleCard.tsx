import { Bundle } from '@/types/bundles';


export default function BundleCard({ bundle }: { bundle: Bundle }) {
    return (
        <div>
            <h2>{bundle.name}</h2>
            <p>Items: {bundle.items.join(', ')}</p>
        </div>
    )
}