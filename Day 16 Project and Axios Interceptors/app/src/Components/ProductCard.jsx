import React from "react";

function ProductCard({ product }) {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] text-lg font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-100 px-2 py-1">
            <span className="text-sm">⭐</span>
            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;