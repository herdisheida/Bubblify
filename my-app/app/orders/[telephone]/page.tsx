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
        <h1 className="text-3xl pb-6">Find Your Orders</h1>
        <p className="pb-6">There is no order associated with this telephone number: {telephone}</p>
        <Link href="/orders"
          className="bg-violet-500 hover:bg-violet-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors      cursor-pointer hover:scale-101 hover:shadow-md">
          back
        </Link>
      </div>
    )
  }

  return (
  <div className="p-10">
    <h1 className="text-3xl pb-6">Orders for telephone: {telephone}</h1>

      {orders.map((order, index) => {
        const total = order.items.reduce((sum, item) => sum + item.bubble.price * item.quantity, 0)

        return (
          <div key={index} className="border p-4 mb-6 rounded-xl">
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

        {/* TODO add old orders to cart? functionality */}
        <Link href="/orders"
          className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded-xl mt-4 transition-colors       cursor-pointer hover:scale-101 hover:shadow-md">
          back
        </Link>
    </div>
  )
}