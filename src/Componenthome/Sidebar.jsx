import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <span id='flexstart' className='toplogo'>Habit <span id='toplogo-2'>tracker</span></span>
      <div className='sidebar-container'>
      <Link to={"/"} className="linkelem">
      <div className='sidebar-link'>
      <p>My habits</p>
      <FontAwesomeIcon icon={faHome} />
      </div>
      </Link>
      <Link to={'/add'} className="linkelem">
      <div className='sidebar-link'>
      <p>Add Habits</p>
      <FontAwesomeIcon icon={faPlus} />
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Sidebar
