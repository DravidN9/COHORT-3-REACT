import React from 'react'
import { Navigate } from 'react-router';

function ProtectedRoutes({children}) {
  let isAdmin = false;
  if(!isAdmin){
    console.log("hey i m running");
   return <Navigate to ="/home"></Navigate>
  }

  return children;
    
      
  
}

export default ProtectedRoutes
