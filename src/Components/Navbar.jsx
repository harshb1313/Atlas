import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center p-4 text-white gap-x-110'>
      <div>
        <NavLink to="/">
          <h2 onClick={()=>console.log("Im clicked")}>LOGO</h2>

        </NavLink>

      </div>
      <ul className='flex space-x-6'>
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/about"><li>ABOUT</li></NavLink>
        <NavLink to="/country" ><li>COUNTRY</li></NavLink>
        <NavLink to="/contact"><li>CONTACT</li></NavLink>
      </ul>
      {console.log("i entered")}
    </nav>
  )
}

export default Navbar
