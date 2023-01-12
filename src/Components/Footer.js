import "./Footer.css"
import React from 'react'

import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
 const Footer = () => {
  return (
    <div className="footer">
              <h1>Contact Me</h1>
        <div className="footer-container">
             <div className="left">
                <div className="location">
                    <FaHome size={20} style={{marginRight:"2rem",color:"white"}}/>
                <div>
                    <p>127 Sangam Vihar Colony</p>
                    <p>Uttar Pradesh</p>
                </div>
             </div>
             <div className="phone">
                <h4> <FaPhone size={20} style={{marginRight:"2rem"}}/>
                +91 6392859129</h4>  
            </div>
             <div className="email">
               <a href="https://mohit.mohit979@gmail.com">   <h4> <FaMailBulk size={20} style={{marginRight:"2rem"}}/>
                 Mohit.Mohit979@gmail.com</h4></a>
               
             </div>
        </div>
        <div className="right">
                {/* <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio sapiente libero quo quod! Illum doloremque molestias voluptatibus mollitia perferendis voluptates expedita? Expedita maxime non obcaecati, quaerat unde reiciendis sequi.</p> */}
            <div className="social">
          <a href="https://github.com/Varun-98-masai"> <FaGithub size={30} style={{marginRight:"1rem",color:"white"}}/></a>
           <FaTwitter size={30} style={{marginRight:"1rem",color:"white"}}/>
         <a href="https://www.linkedin.com/in/varun-jatav-98ba16226/"><FaLinkedin size={30} style={{marginRight:"1rem",color:"white"}}/></a>  
             </div>
    </div>
    </div>
    </div>
  )
}
export default Footer;