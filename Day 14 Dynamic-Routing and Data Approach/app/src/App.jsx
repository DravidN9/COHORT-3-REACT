import React from 'react'
import Navbar from './Components/Navbar'
import AppRoutes from './Routes/AppRoutes'
function App() {
  return (
    <div className=' flex flex-col gap-4'>
       <Navbar/>
       
     <AppRoutes/>
   
    </div>
  )
}

export default App
