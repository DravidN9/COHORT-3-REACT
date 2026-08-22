import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">

      {/* Product Image */}
      <div onClick={() => navigate(`/detail/${product.id}`)} className="h-64 bg-gray-50 flex items-center justify-center overflow-hidden p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Category */}
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>

            <span className="text-sm font-medium text-gray-700">
              {product.rating?.rate}
            </span>

            <span className="text-xs text-gray-400">
              ({product.rating?.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;