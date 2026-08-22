import React from 'react'
import { NavLink } from 'react-router'
function Navbar() {


  return (
  <div className='flex justify-between rounded p-5 bg-black items-center  text-white'>
        <div>Logo</div>
              <div className='flex item-center justify-between gap-10 text-xl'>
          
              <NavLink to ={'/home'} className='cursor-pointer' >Home</NavLink>
              <NavLink to = {'/products'} className='cursor-pointer' >Products</NavLink>
              <NavLink to={'/about'} className='cursor-pointer' >About</NavLink>
              </div>
            
              <button>Login</button>
    </div>
  )
} 

export default Navbar
