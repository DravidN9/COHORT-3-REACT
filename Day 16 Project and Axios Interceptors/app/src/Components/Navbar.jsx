import React, { useContext } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router'
import { Auth } from '../Context/AuthContext';
import { toast } from 'react-toastify';


function Navbar() {
 const {setLoggedInUser} =useContext(Auth);
  return (
    <div className='border-r border-gray-500 flex flex-col justify-between  p-3' >
     
    <div className='gap-10 flex flex-col'>  <h1 className='text-3xl font-semibold '>E-comm</h1>

      <div className='flex flex-col gap-6 ml-5 '>
       <NavLink className={({isActive}) => isActive ?'font-semibold text-red-500 border-b border-gray-500': 'text-black border-b border-gray-500'} to ={'/main'}
        end>Home</NavLink>
       <NavLink className={({isActive}) => isActive ?'font-semibold text-red-500 border-b border-gray-500': 'text-black border-b border-gray-500'} to ={'/main/users'}>Users</NavLink>
       <NavLink className={({isActive}) => isActive ?'font-semibold text-red-500 border-b border-gray-500': 'text-black border-b border-gray-500'}  to ={'/main/products'}>Products</NavLink>

      </div></div>
  
    <button onClick={()=>{
      localStorage.removeItem('loggedInUser')
      setLoggedInUser(null);
      toast.info("Successfully Logout");
    }}
    className='py-3 bg-red-600 text-white rounded cursor-pointer'>Logout</button>
    
    </div>
  )
}

export default Navbar
