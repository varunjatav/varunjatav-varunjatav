
import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import Resume from "../Downloads/Varun_Jatav_Resume.pdf";

const NavbarPort = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor] = useState(false);
  const changeColor =() =>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);

  return (
    // Home, About Me, Skills, Project, Contact & Resume
    <div id="nav-menu" className={color ? "header header-bg" : "header"}>
      <Link to="./">
        <h1>Varun Jatav</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleClick}>
          <a href="#home">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#about">About</a>
        </li>
        <li onClick={handleClick}>
          <a href="#skills">Skills</a>
         
        </li>
        <li onClick={handleClick}>
          <a href="#project">Project</a>
        </li>
       
       
        <li onClick={handleClick}>
          <a href="#footer">Contact</a>
        </li>
        <li><a class="nav-link resume" onClick={() =>
                                window.open(
                                    `https://drive.google.com/file/d/1fgD_3kDdKF6vWrg4dLiby5cqv3NvVIzW/view?usp=sharing`
                                )
                            } href={Resume} target="_blank" download="Varun_Jatav_Resume"
                                rel="noreferrer"><i className={`uil uil-file-alt `}>
                                </i> Resume </a> </li>
         
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavbarPort;