// cart management - app/(checkout)/cart/page.tsx

"use client";

import { useState, useEffect } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('bubblify-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const updateQuantity = (id: number, delta: number) => {

    };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {/* List items, quantities, and total price */}
      {/* "Proceed to checkout" button */}
    </div>
  );
}