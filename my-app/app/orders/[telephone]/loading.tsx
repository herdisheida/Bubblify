// loading for search order by telephone - app/orders/[telephone]/loading.tsx
import LoadingSpinner from "@/components/ui/LoadingSpinner"

export default function Loading() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl pb-6">Searching for your orders...</h2>
      <LoadingSpinner />
    </div>
  )
}