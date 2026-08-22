import React from 'react'
import { Outlet, useNavigate } from 'react-router'

function Home() {

 let navigate = useNavigate()
  return (
    <div>
      <h1 onClick={()=> navigate('/home/details')}>This is HomePage</h1>
      <Outlet/>
    </div>
  )
}

export default Home
 