import React, { useState } from 'react'
import three , {one, two , four}  from './test'
import './App.css'

function App() {

  //  three();

  //  one(); 

  //  two();

  //  four();

  //  return ke upar javascript likhate hain


// let count = 10;
let [count ,setCount] = useState(0);
  return (
    <div>
       <h1>Hello, React!</h1>

       <h2>Count - {count}</h2>

     <button onClick={() =>{
      setCount(count +1)
     }}>Increment</button>

     <button onClick={() =>{
      setCount(count = 0)
     }}>Reset</button>

    </div>
  )
}
// export  -- pure object se 1 value export karata hai , & unke name ko import karte waqt same name se import karna padta hai

//default export -- global export karata hai, jiska naam kuch bhi ho sakata hai
export default App

