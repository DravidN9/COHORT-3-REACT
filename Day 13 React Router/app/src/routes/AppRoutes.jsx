import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Contact  from '../Pages/Contact'
import About from '../Pages/About'
import Details from '../Pages/Details'


function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path ={"/home"} element = {<Home/>}>
         <Route path={'details'} element = {<Details/>}></Route>
        </Route>
        <Route path = {"/about"} element = {<About/>}></Route>
        <Route path = {"/contact"} element = {<Contact/>}></Route>

      </Routes>
    </div>
  )
}

export default AppRoutes
