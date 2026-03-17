// order details - app/orders/[telephone]/page.tsx

import { getOrdersByTelephone } from "@/lib/api/orders"
import Link from "next/link"

interface PageProps {
  params: Promise<{
    telephone: string
  }>
}

export default async function OrdersByTelephone({ params }: PageProps) {
  const { telephone } = await params
  const orders = await getOrdersByTelephone(telephone)

  if (!orders || orders.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-3xl mb-6">Find Your Orders</h1>
        <p className="pb-6">No orders found for this telephone number</p>
        <Link href="/orders"
          className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded mt-4 transition-colors cursor-pointer">
          back
        </Link>
      </div>
    )
  }

  return (
  <div className="p-10">
    <h1 className="text-3xl mb-6">Orders for {telephone}</h1>

      {orders.map((order, index) => {
        const total = order.items.reduce((sum, item) => sum + item.bubble.price * item.quantity, 0)

        return (
          <div key={index} className="border p-4 mb-6 rounded">
            <h2>{order.customer.name}</h2>

            <ul className="list-disc pl-5 my-2">
              {/* order items */}
              {order.items.map((item) => (
                <li key={item.bubble.id}>
                  {item.bubble.name} x {item.quantity} (${item.bubble.price})
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total: ${total}</p>
          </div>
        )
      })}

        <Link href="/orders"
          className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded mt-4 transition-colors cursor-pointer">
          back
        </Link>
    </div>
  )
}