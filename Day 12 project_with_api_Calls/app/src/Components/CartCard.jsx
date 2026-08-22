import React, { useContext } from 'react';
import { MyStore } from '../Context/MyContext';

function CartCard({ product }) {

  let {IncrementQuantity , DecrementQuantity , RemoveCard} = useContext(MyStore);
     
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 flex gap-4 items-center">
    
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-lg font-bold text-green-600 mt-2">
          ${product.price}
        </p>
      </div>

      {/* Quantity */}
     
       <div className="flex items-center gap-3">
        <button onClick={()=> {
          
          
            DecrementQuantity(product.id)
          
        }
        
        }
         className="w-8 h-8 rounded-md bg-gray-200">
          -
        </button>

        <span className="font-semibold">{
         product.quantity
          }</span>

        <button onClick={()=> IncrementQuantity(product.id)}
        className="w-8 h-8 rounded-md bg-gray-200">
          +
        </button> </div>

      {/* Remove */}
      <button onClick={()=> RemoveCard(product.id)}
       className="text-red-500 hover:text-red-700 font-medium">
        Remove
      </button>

    </div>
  );
}

export default CartCard;