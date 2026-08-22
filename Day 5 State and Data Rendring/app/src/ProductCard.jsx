import React from 'react'

function ProductCard({product , del}) {
  
  return (
     
    <div className='w-50 h-50 h-fit border-2 rounded  flex flex-col gap-2 justify-between '>
      <div ><img src={product.image} alt="" /></div>

      <div><h2 className='font-semibold'>{product.title.substring(0,20)} </h2>
        <p className='text-xs'> {product.category} </p>
        <p className='text-green-600'>{product.price} </p>
      </div>
      <button className=' p-2 bg-red-500' onClick = {() => del(product.id)}>Delete</button>
    </div>
  )
}

export default ProductCard

