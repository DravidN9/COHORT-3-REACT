import React from 'react'

function Login({ setIsLogin }) {
  return (
    <div className = 'bg-white w-96 p-10 rounded shadow-lg' >
      <form className= "flex flex-col gap-4 ">
        <h2>Login</h2>
        <input className ="p-4 border border-gray-500 rounded" type="text" placeholder="Username" name = "Username" />
        <input className ="p-4 border border-gray-500 rounded" type="password" placeholder="Password" name ='Password'/>
        <button className = "bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
      </form>
      <p>Didn't have an Account ? <span className='text-blue-500 hover:underline cursor-pointer' onClick={() => setIsLogin(true)}> Register Here</span></p>
    </div>
  )
}

export default Login
