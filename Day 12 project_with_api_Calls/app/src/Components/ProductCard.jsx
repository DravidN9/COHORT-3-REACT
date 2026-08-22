import React, { useContext, useEffect }  from 'react'
import { MyStore } from '../Context/MyContext'

import { useState } from 'react';

function ProductCard({product ,isInCart}) {
   let {setCartItems , IncrementQuantity ,DecrementQuantity} =   useContext(MyStore);
  //  useEffect(()=>{
  //   ProductCard();
  //  })
   
  return (
  <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-500 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        
        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:bg-red-50 hover:text-red-500">
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Product Title */}
        <h2 className="mb-2 line-clamp-2 min-h-\[48px\] text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center rounded-md bg-green-600 px-2 py-1 text-sm font-medium text-white">
            ⭐ {product.rating.rate}
          </div>

          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">

          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>


              {isInCart ? 
              
               <div className="flex items-center gap-3">
        <button onClick={()=> DecrementQuantity(product.id)
        
        }
         className="w-8 h-8 rounded-md bg-gray-200">
          -
        </button>

        <span className="font-semibold">{
         isInCart.quantity
          }</span>

        <button onClick={()=> IncrementQuantity(product.id)}
        className="w-8 h-8 rounded-md bg-gray-200">
          +
        </button> </div>
        :
            (<button 
          onClick={()=> {
          
        
             setCartItems((prev)=> [...prev , {...product, quantity: 1,}])}}
          className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>)

            }
          

        </div>
      </div>
    </div>
  )
}

export default ProductCard
