import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux';
import store from '../app/store';
function PublicProtected() {
   let {user} = useSelector((store)=> store.auth);
  if(user){

    return <Navigate to="/main"/>
  }



  return (
 <Outlet/>
  )
}

export default PublicProtected