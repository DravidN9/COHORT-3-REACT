import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/CounterSlice';


function App() {
  let dispatch = useDispatch()

 let { count } = useSelector((store)=> store.counter);


  return (
    <div>React-Redux
       
       <h1>Count is {count} </h1>
       <button onClick={()=> dispatch(increment())}>Increment</button> )
       <span>   </span>
       <button onClick={()=> dispatch(decrement())}>Decrement</button>
      
       </div>
  )
}

export default App