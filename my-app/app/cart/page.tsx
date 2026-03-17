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

            <button onClick={() => decreaseQuantity(item.bubble.id)} className="font-bold cursor-pointer"> - </button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.bubble.id)} className="font-bold cursor-pointer"> + </button>
            
            {/* trash icon */}
            <button onClick={() => removeFromCart(item.bubble.id)} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>

          </div>
        </div>
      ))}

      <h2 className="text-xl mt-6">Total: ${total}</h2>

      {cart.length > 0 && (
        <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-3 rounded mt-4 transition-colors cursor-pointer"
          onClick={() => (window.location.href = "/checkout/delivery")}> Proceed to Checkout
        </button>
      )}
    </div>
  );
}