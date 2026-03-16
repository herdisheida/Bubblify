// order details - http://localhost:3000/orders/[telephone]

export default function OrderDetails({telephone}: {telephone: number}) {
  return (
  <div className="p-10">
    <h1 className="text-3xl mb-6">Order Details {telephone}</h1>
    <p>bla bla bla</p>
  </div>

  );
}