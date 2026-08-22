import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-between items-center'>
       <div>Logo</div>
              <div className='flex item-center justify-between gap-10'>
              <NavLink to = {'/home'}>Home</NavLink>
              <NavLink to = {'/about'}>About</NavLink>
              <NavLink to = {'/contact'}>Contact</NavLink>
      
              </div>
              <button>Login</button>
    </div>
  )
}

export default Navbar
