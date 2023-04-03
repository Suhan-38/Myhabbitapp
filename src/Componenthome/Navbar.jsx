import React from 'react'
import "./Navbar.css"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <div className='topnav'>
       <span id='toplogo'>Habit <span id='toplogo-2'>tracker</span></span>
    </div>
  )
}

export default Navbar
