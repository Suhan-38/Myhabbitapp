import React from 'react'
import "./Home.css"
import Navbar from '../Componenthome/Navbar'
import Sidebar from '../Componenthome/Sidebar'
import Habitcontent from '../Componenthome/Habitcontent'
const Home = () => {
  return (
    <div className='main'>
      
        <Navbar />
        <div className='flexhabit'>
        <Sidebar />
        <Habitcontent />
        </div>
        
     
    </div>
  )
}

export default Home
