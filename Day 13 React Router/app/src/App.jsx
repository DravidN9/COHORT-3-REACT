import React, { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from "./Pages/Contact"
import { NavLink, Route, Routes } from 'react-router'
import Navbar from './Components/Navbar'
import AppRoutes from './routes/AppRoutes'
function App() {


  return (
    <div className=' h-screen p-2'>

      
     <Navbar/>
     <AppRoutes></AppRoutes>
      
    </div>
  )
}

export default App;
