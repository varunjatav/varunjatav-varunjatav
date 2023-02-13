import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './githubCalender.css'

 const Calender = () => {
  return (
    <div  className="container">
       
    <div class="react-activity-calendar" className="calender" >
        <GitHubCalendar
         username='varun-98-masai'
         blockSize={20}
        //  fontSize={20}  
        >
        <ReactTooltip/>
        </GitHubCalendar>
    </div>
    </div>
  
  )
}
export default Calender;