import React, { useContext } from 'react'
import {  MyWebsite } from '../Context/MyWebsite'

function Navbar() {

  const{setIsCartOpen} = useContext(MyWebsite)
  return (
    <div className='rounded p-5 bg-black flex item-center justify-between text-white'>
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={()=> setIsCartOpen(true)} className='cursor-pointer'>Home</p>
        <p onClick={()=> setIsCartOpen(false)} className='cursor-pointer'>Cart</p>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
