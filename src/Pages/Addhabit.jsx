import React, { useState } from 'react'
import Navbar from '../Componenthome/Navbar'
import Sidebar from '../Componenthome/Sidebar'
import "./Addhabit.css";
import { addhabit } from '../reduxtoolkit/slice';
import { useDispatch } from 'react-redux';
import {consistency} from '../Componenthome/consistency';
import { useNavigate } from 'react-router-dom';
const Addhabit = () => {
    const Navigate=useNavigate();
    const[habittext,sethabittext]=useState("");
    const[haditdiscription,sethaditdiscription]=useState("");
    const dispatch=useDispatch();
    //here handle add is used to invoke addhabit reducer in that we will pass new habit and description and after this we will use navigate to reach to home page
    function handleadd(e){
        e.preventDefault();
        dispatch(addhabit({title: habittext,description: haditdiscription,consistency}));
        sethabittext("");
        sethaditdiscription("");
        Navigate("/");
    }

  return (
    <div className='addhabitpage'>
      <Navbar />
      <div className='flexhabit'>
      <Sidebar />
      <div className='input-container'>
        <h1>You can add you habbit here</h1>
          <form className='addform' onSubmit={handleadd}>
            {/* //here onchange we will store the values in habittext and habitdiscription respectively */}
            <input type="text"  placeholder='Add your habit*' onChange={(e)=>{sethabittext(e.target.value)}} value={habittext}/>
            <input type="text"  placeholder='Description*' onChange={(e)=>{sethaditdiscription(e.target.value)}} value={haditdiscription}/>
            <button type='submit' id='addbutton'>Add Habit</button>
          </form>
      </div>
      </div>
    </div>
  )
}

export default Addhabit
