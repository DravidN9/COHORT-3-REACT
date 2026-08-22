import React from 'react'
import { useContext } from 'react'
import {Outlet , Navigate} from 'react-router'
import { Auth } from '../Context/AuthContext'
function ProtectedRoute() {

const {loggedInUser,registeredUser} = useContext(Auth);

let user = registeredUser.find((val)=>{
  return loggedInUser.email === val.email && loggedInUser.password === val.password;
})

if(!loggedInUser && !user){
  return <Navigate to= '/' />
}

  return (
   <Outlet/>
  )
}

export default ProtectedRoute
