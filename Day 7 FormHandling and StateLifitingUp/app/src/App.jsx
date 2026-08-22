import React from 'react'
import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import UserCard from './Components/UserCard'
function App() {
  const [users, setUser] = useState([]);
  const [isLogin, setIsLogin ] = useState(true);
  return (
    <div className = "bg-gray-300 h-screen flex flex-col justify-center items-center">
      <h1>Hello, Champions</h1>
     <Register setIsLogin = {setIsLogin} setUser = {setUser} />
     <div className = "flex gap-4 mt-4">
      {users.map((user,index) => {
        return <UserCard key = {index} user = {user} />
      })}
     </div>

    </div>
  )
}

export default App
