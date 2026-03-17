// cart management - app/(checkout)/cart/page.tsx
'use client'

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.bubble.price * item.quantity,
    0
  )

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {/* list cart items*/}
      {cart.map((item) => (
        <div key={item.bubble.id} className="flex justify-between border-b py-4">
          <div>
            <h2>{item.bubble.name}</h2>
            <p>${item.bubble.price}</p>
          </div>

          {/* quantity controls */}
          <div className="flex gap-3 items-center">
            <button onClick={() => decreaseQuantity(item.bubble.id)}> - </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.bubble.id)}> + </button>
            <button onClick={() => removeFromCart(item.bubble.id)}> Remove </button>
          </div>
        </div>
      ))}

      <h2 className="text-xl mt-6">Total: ${total}</h2>

      {cart.length > 0 && (
        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors"
          onClick={() => (window.location.href = "/checkout/delivery")}> Proceed to Checkout
        </button>
      )}
    </div>
  );
}