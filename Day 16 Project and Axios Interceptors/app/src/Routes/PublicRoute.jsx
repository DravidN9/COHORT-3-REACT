import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Auth } from '../Context/AuthContext'

function PublicRoute() {

const {loggedInUser,registeredUser} = useContext(Auth);

 if (!loggedInUser) {
    return <Outlet/>;
  }

let user = registeredUser.find((val)=>{
  return loggedInUser.email === val.email && loggedInUser.password === val.password;
})

if(loggedInUser && user){
  return <Navigate to= {'/main'} />
}

  return (
   <Outlet/>
  )
}

export default PublicRoute;