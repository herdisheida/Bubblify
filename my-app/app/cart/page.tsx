// cart management - app/(checkout)/cart/page.tsx
'use client'

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <div>
      <h1>Your Cart</h1>
      {/* List items, quantities, and total price */}
      {cart.map((item) => (
        <div key={item.bubble.id}>
          <h2>{item.bubble.name}</h2>
          <p>Price: ${item.bubble.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* remove or decrease */}
          { cart.length > 0 ? (
            <button onClick={() => removeFromCart(item.bubble.id)}>Remove</button>
          ) : <button onClick={() => decreaseQuantity(item.bubble.id)}>-</button> }
          {/* increase */}
          <button onClick={() => increaseQuantity(item.bubble.id)}>+</button>
        </div>
      ))}

      {/* proceed to checkout button functionality */}
      {cart.length > 0 && (
        <button>Proceed to checkout</button>
      )}
    </div>
  );
}