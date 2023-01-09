import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './githubCalender.css'

 const Calender = () => {
  return (
    <div style={{textAlign:"center",marginTop:"100px",marginBottom:"80px"}}>
       
    <div style={{margin:"auto",color:"white",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex"}}>
        <GitHubCalendar
         username='varun-98-masai'
         blockSize={20}
         fontSize={20}  
        >
        <ReactTooltip/>
        </GitHubCalendar>
    </div>
    </div>
  
  )
}
export default Calender;