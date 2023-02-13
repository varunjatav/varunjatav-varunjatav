import React from 'react'
import  Footer  from '../Components/Footer'
import NavbarPort from '../Components/Navbar'
import  About from './about'
import Calender from './githubClender'
import Project from './project'
import Skill from './skill'
import './home.css'
import HomeInfo from './homeInfo'
import Stats from './stats'
import Contact from '../Components/Footer'

 const Home = () => {
  return (
    <div  id="home" className='main'>
      <div>
      <NavbarPort/>
      </div>
     
      <div id='home'>
        <HomeInfo/>
      </div>
      <div id="about">
      <About/>
      </div>
      <div id="skills">
      <Skill/>
      </div>
      
      <div id='#calender'>
       <Calender/>
       <Stats/>
      </div>
      <div id="project">
      <Project/>
      </div>
      
      <div id="footer">
      <Contact/>
      </div>
      
    </div>
  )
}
export default Home;