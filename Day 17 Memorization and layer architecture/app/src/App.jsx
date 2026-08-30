import React, { useCallback, useMemo, useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'

function App() {
 console.log("App Rendering...");

 const [counts, setCounts] = useState(0);
 const [users , setUsers] = useState({name: 'Raghav', id:789});

let calculation = useMemo(() =>{
  let sum = 0;
   
  for(let i=0; i<1000; i++){
    sum = sum + i;
  }
return sum
}
)

let greet = useCallback(()=>{
  console.log("Good evening..");
},[]);


  return (
    <div>
      <h1> Memoization and Layer Architecture</h1>
      <h2>Count is {counts} </h2>
      <h2>name is {users.name} </h2>
      <h2>My calculation is {calculation()} </h2>
      <button onClick={()=>setUsers({...users,name: 'Ranjeet'})}> change name {"  "} </button>
      <button onClick={()=> setCounts(counts +1)}> Increment</button>
      <Home greet ={greet} />
      <About greet = {greet}  />
    </div>
  )
}

export default App
