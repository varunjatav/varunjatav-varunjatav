import React from 'react'
import myPic from "../myPic"
import './about.css'

export const About = () => {
  return (
    <div >
    <div className='aboutContainer' >
      <div className='aboutMe' >
        <h1 > Hii</h1>
        <h1 > I am</h1>
        <h1>VARUN JATAV</h1>
        <h5 >A Full Stack Web Developer having 1200+ hours of coding experience. Worked on different projects using Javascript as well as react and looking forward to work more on projects and gain more experince. </h5>
      </div>
      <div className='myImg'>
        <img src={myPic} alt="myPic"  />
      </div>
    </div>
    </div>
  )
}
