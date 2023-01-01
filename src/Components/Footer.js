import "./Footer.css"
import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
export const Footer = () => {
  return (
    <div className="footer">
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
                  <h4> <FaMailBulk size={20} style={{marginRight:"2rem"}}/>
                 Mohit.Mohit979@gmail.com</h4>
               
             </div>
        </div>
        <div className="right">
                <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio sapiente libero quo quod! Illum doloremque molestias voluptatibus mollitia perferendis voluptates expedita? Expedita maxime non obcaecati, quaerat unde reiciendis sequi.</p>
            <div className="social">
           <FaFacebook size={30} style={{marginRight:"1rem",color:"white"}}/>
           <FaTwitter size={30} style={{marginRight:"1rem",color:"white"}}/>
           <FaLinkedin size={30} style={{marginRight:"1rem",color:"white"}}/>
             </div>
    </div>
    </div>
    </div>
  )
}
