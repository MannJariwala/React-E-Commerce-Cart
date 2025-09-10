import React, { useState, useEffect } from "react";
import { useCart } from "./Contexts/CartContext";

function Cart() {
  const { cartData, deleteProduct } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cartData.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-blue-600 font-semibold">
                  ${item.price * item.quantity}
                </p>

                <button
                  onClick={() => {
                    deleteProduct(item.id);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartData.length > 0 && (
        <div className="mt-8 text-right">
          <h2 className="text-xl font-semibold">
            Total: $
            {cartData
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h2>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
