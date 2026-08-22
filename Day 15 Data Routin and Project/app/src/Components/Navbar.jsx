import React from 'react'
import { NavLink } from 'react-router'


function Navbar() {
  return (
    <div className='flex gap-4 justify-center' >
      <NavLink to = '/'>Home</NavLink>
      <NavLink to = '/about'>About</NavLink>
      <NavLink to = '/services'>Services</NavLink>
      {/* <p to = ''>Home</p>
      <p to = 'about'>About</p>
      <p to = 'services'>Services</p> */}
  

    </div>
  )
}

export default Navbar
