import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './homeinfo.css'
 const HomeInfo = () => {
  return (
    <div className='Information_div'>
        <div className='nameContainer' >
        <h3 > Hii</h3>
         <h3 >I am</h3>
         <h1  id="user-detail-name">VARUN JATAV</h1>
         <h2>
         <TypeAnimation
      sequence={[
      
       
        'FRONTEND WEB DEVELOPER',
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
      // style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px' }}
      className="typeAnime"
    /></h2>
        
        </div>
         
    </div>
  )
}
export default HomeInfo;