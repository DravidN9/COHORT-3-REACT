import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function ProductDetail() {
const [singleProductData, setSingleProductData] = useState({});
console.log(singleProductData);

  let { id } = useParams();
  
    let getSingleProductData = async ()=>{
        try{
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);

           setSingleProductData(res.data);
            }catch(error){
          console.log("Detail api error" , error);

          }

  }
  

  useEffect(()=>{
       getSingleProductData();
  },[]);




  return (
   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div className="bg-gray-50 flex items-center justify-center p-10">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="w-full max-w-md h-[450px] object-contain hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="p-8 md:p-12 flex flex-col justify-center">

            {/* Category */}
            <span className="w-fit px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold capitalize">
              {singleProductData.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5 leading-tight">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-lg">
                <span className="text-yellow-500 text-lg">
                  ★
                </span>

                <span className="font-semibold text-gray-800">
                  {singleProductData.rating?.rate}
                </span>
              </div>

              <span className="text-gray-500">
                {singleProductData.rating?.count} Reviews
              </span>

            </div>

            {/* Price */}
            <div className="mt-7">
              <span className="text-4xl font-bold text-gray-900">
                ${singleProductData.price}
              </span>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {singleProductData.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-8">

              <span className="font-semibold">
                Quantity
              </span>

              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                <button className="px-4 py-2 text-xl hover:bg-gray-100">
                  -
                </button>

                <span className="px-5 py-2 border-x border-gray-300">
                  1
                </span>

                <button className="px-4 py-2 text-xl hover:bg-gray-100">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition active:scale-95">
                Add to Cart
              </button>

              <button className="px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                ♡
              </button>

            </div>

            {/* Extra Info */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t">

              <div className="text-center">
                <p className="text-xl">🚚</p>
                <p className="text-xs text-gray-500 mt-1">
                  Free Delivery
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl">🔄</p>
                <p className="text-xs text-gray-500 mt-1">
                  Easy Returns
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl">🔒</p>
                <p className="text-xs text-gray-500 mt-1">
                  Secure Payment
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail
