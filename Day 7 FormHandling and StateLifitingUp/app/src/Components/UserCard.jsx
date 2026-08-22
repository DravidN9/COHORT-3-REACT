import React from 'react'

function UserCard({user}) {
   

  return (
    <div className = 'bg-gray-400 w-60 flex flex-col p-8 rounded shadow-lg flex gap-2 h-80' >
      <div className='w-45 h-50 overflow-hidden rounded border-2 border-black'>
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
      <div>

        
        <h2>Name: {user.Name}</h2>
        <p>Username: {user.Username}</p>
      </div>

    </div>
  )
}

export default UserCard
