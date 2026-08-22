import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import ProductDetail from '../Pages/ProductDetail'
import ProtectedRoutes from '../Pages/ProtectedRoutes'
function AppRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/home' element ={<Home/>} ></Route> 
        <Route path='/about' element ={<ProtectedRoutes><About/></ProtectedRoutes>} ></Route> 
        <Route path='/products' element ={<Products/>} ></Route> 
        <Route path ='/detail/:id' element = {<ProductDetail/>}></Route>
       </Routes>
    </div>
  )
}

export default AppRoutes
