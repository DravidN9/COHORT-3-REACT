
import React, { useContext } from "react";
import { MyWebsite } from "../Context/MyWebsite";

function Cart() {

  const {cartItems} = useContext(MyWebsite)
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      {/* Heading */}
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-1 text-gray-500">
          {cartItems.length} item(s) in your cart
        </p>
      </div>

      {/* Cart Content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">

        {/* Products */}
        <div className="space-y-4 lg:col-span-2">

          {cartItems.length === 0 ? (

            /* Empty Cart */
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="mb-4 text-6xl">🛒</div>

              <h2 className="text-2xl font-semibold text-gray-800">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500">
                Add some products to your cart to see them here.
              </p>
            </div>

          ) : (

            cartItems.map((product) => (

              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row"
              >

                {/* Product Image */}
                <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-40">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>
                    {/* Category */}
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                      {product.category}
                    </p>

                    {/* Title */}
                    <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                      {product.title}
                    </h2>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                        ⭐ {product.rating.rate}
                      </span>

                      <span className="text-sm text-gray-500">
                        {product.rating.count} reviews
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                    {/* Price */}
                    <p className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">

                      <button className="px-3 py-1.5 text-lg hover:bg-gray-100">
                        −
                      </button>

                      <span className="border-x border-gray-300 px-4 py-1.5">
                        1
                      </span>

                      <button className="px-3 py-1.5 text-lg hover:bg-gray-100">
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button 
                   
                    
                    className="text-sm font-medium text-red-500 hover:text-red-700">
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-gray-200 pb-5">

              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>

                <span>
                  $
                  {cartItems
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className="font-medium text-green-600">
                  FREE
                </span>
              </div>

            </div>

            <div className="flex justify-between py-5 text-xl font-bold">
              <span>Total</span>

              <span>
                $
                {cartItems
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </span>
            </div>

            <button className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-95">
              Proceed to Checkout
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;

