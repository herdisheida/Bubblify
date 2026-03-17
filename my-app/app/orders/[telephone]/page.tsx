// order details - app/orders/[telephone]/page.tsx

import { getOrdersByTelephone } from "@/lib/api/orders"

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
        <h1>No orders found for this telephone number</h1>
      </div>
    )
  }

  return (
  <div className="p-10">
    {/* TODO fix */}
      {/* <h1 className="text-3xl mb-6">Orders for {telephone}</h1> */}

      {orders.map((order, index) => {
        const total = order.items.reduce((sum, item) => sum + item.bubble.price * item.quantity, 0)

        return (
          <div key={index} className="border p-4 mb-6">
            <h2>{order.customer.name}</h2>

            <ul>
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
    </div>
  )
}