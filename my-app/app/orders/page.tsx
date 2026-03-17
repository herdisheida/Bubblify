// look at past orders (allow searching telephone numbers) - app/orders/page.tsx

import OrderSearch from "@/components/OrderSearch"


export default function OrdersPage({}) {

  return (
  <div className="p-10">
    <h1 className="text-3xl pb-6">Find Your Orders</h1>
    <OrderSearch />
  </div>
);
}