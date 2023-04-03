import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Habitcontent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faHourglass, faTrash } from '@fortawesome/free-solid-svg-icons'
import { updateconsistency } from '../reduxtoolkit/slice';
const Habitcontent = () => {
    const habititem=useSelector(state=> (state.habit.habit));
    const dispatch=useDispatch();
    console.log(habititem);
    //this function onclick on icon should toggle status and invoke updateconsistency reducer
    async function handlestatus(prev,particularday,elementno){
        if(prev==="none"){
            await dispatch(updateconsistency({changestusvalue:"done",particularday,elementno}));
            
        }
        else if(prev==="done"){
            dispatch(updateconsistency({changestusvalue:"notdone",particularday,elementno}));
            console.log(habititem);
        }
        else{
            dispatch(updateconsistency(({changestusvalue:"none",particularday,elementno})));
            console.log(habititem);
        }
        

    }
  return (
    <div className='habit-content'>
      {habititem.map((element,k)=> {
        return(
    <div className='habitsingleitem'>
        <div className='itemheading'>
        <p className='itemptag'><span>{element.title} : </span><span>{element.description}</span></p>
        </div>
        <div className='date-items-container' style={{width: '100%', overflowX: 'auto',overflowY: "hidden"}}>
        <div className='date-items'>
        {element.consistency.map((day,i)=>{
            return(
                <div className='calender' key={i}>
                    {/* here based on status we will toggle the icons */}
                        <span style={{fontSize: "16px",fontWeight: "600"}}>Day : {i+1}</span>
                        {day.status==="none"?<FontAwesomeIcon icon={faHourglass} onClick={()=>{handlestatus("none",i,k)}}/>:null}
                        {day.status==="done"?<FontAwesomeIcon icon={faCircleCheck} onClick={()=>{handlestatus("done",i,k)}} />:null}
                        {day.status==="notdone"?<FontAwesomeIcon icon={faCircleXmark} onClick={()=>{handlestatus("notdone",i,k)}} />:null}
                    </div>
                    )
        })}</div>
        </div>
    </div>)
    })}
    </div>
  )
}

export default Habitcontent
