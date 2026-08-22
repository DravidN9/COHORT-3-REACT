import React, { useContext } from 'react'
import CartCard from '../Components/CartCard'
import { MyStore } from '../Context/MyContext'

function CartScreen() {
  let {cartItems} =   useContext(MyStore);
  return (
    <div className='h-[95%] grid grid-col-3 gap-4'>
      {
        cartItems.map((elem) =>{
          return  <CartCard product = {elem} key ={elem.id}></CartCard>
        })
      }
    </div>
  )
}

export default CartScreen
