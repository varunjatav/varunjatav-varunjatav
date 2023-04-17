import React from 'react'



import myPic from "../myPic"
import './about.css'

 const About = () => {
  return (
  
    <div class="about section nav-link about">
      <title>Varun Jatav</title>
    <div className='aboutContainer' >
    <div className='myImg'>
        <img class="home-img"src={myPic} alt="myPic"  />
      </div>
      <div id="user-detail-intro" className='aboutMe' >
      <h1>About Me</h1>
        
        <p>A passionate aspiring Frontend Developer. Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, React, and Redux. Ability to translate business requirements into technical solutions.Looking forward to making a significant contribution to an organization through dedicated effort.</p>
      </div>
      
    </div>
   
    </div>
  )
}
export default About