// order details - http://localhost:3000/orders/[telephone]

export default function OrderDetails({telephone}: {telephone: number}) {
  return <div>Order details page: {telephone}</div>;
}