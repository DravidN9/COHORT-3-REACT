import React, { useEffect , useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {


const [count , setCount]= useState(0);

useEffect(()=>{
console.log("App Rendring ....")


} , []);
0
  return (
    <div>
      {/* <Home/>
      <About/>
      <Contact/> */}
       <h1> Count is  = {count}</h1>
      <button  onClick={()=> setCount(count +1)}>Increment</button>
    </div>
  )
}

export default App
