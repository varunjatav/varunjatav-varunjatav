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
        <h3 > Hii</h3>
        <h3 > I am</h3>
        <h2><TypeAnimation
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
    /></h2>
        
        <p >A passionate aspiring Full Stack Developer skilled in MERN stack. Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, JavaScript, React, and Redux. Ability to translate business requirements into technical solutions.Looking forward to making a significant contribution to an organization through dedicated effort.</p>
      </div>
      
    </div>
   
    </div>
  )
}
export default About