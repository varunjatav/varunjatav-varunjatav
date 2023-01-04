import React from 'react'

import { TypeAnimation } from 'react-type-animation'

import myPic from "../myPic"
import './about.css'

 const About = () => {
  return (
   
    <div >
     
    <div className='aboutContainer' >
    <div className='myImg'>
        <img src={myPic} alt="myPic"  />
      </div>
      <div className='aboutMe' >
        <h2 > Hii</h2>
        <h2 > I am</h2>
        <h1><TypeAnimation
      sequence={[
      
       
        'VARUN JATAV',
        1000, // Types 'Three' without deleting 'Two'
        " ",
        1000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px' }}
    /></h1>
        
        <h5 >A Full Stack Web Developer having 1200+ hours of coding experience. Worked on different projects using Javascript as well as react and looking forward to work more on projects and gain more experince. </h5>
      </div>
      
    </div>
   
    </div>
  )
}
export default About