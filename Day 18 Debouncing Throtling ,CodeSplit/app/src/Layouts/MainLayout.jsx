import { NavLink } from 'react-router'

function MainLayout() {
  return (
    <div>
      <nav>
        <NavLink to = {'/'}>App</NavLink>
        <NavLink to = {'/about'}>About</NavLink>
        <NavLink to = {'/contact'}>Contact</NavLink>
        
      </nav>
    </div>
  )
}

export default MainLayout