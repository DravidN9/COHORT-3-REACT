import React from 'react'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
