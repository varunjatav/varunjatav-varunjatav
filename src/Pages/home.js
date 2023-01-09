import React from 'react'
import  Footer  from '../Components/Footer'
import NavbarPort from '../Components/Navbar'
import  About from './about'
import Calender from './githubClender'
import Project from './project'
import Skill from './skill'


 const Home = () => {
  return (
    <div>
      <NavbarPort/>
      <div id="about">
      <About/>
      </div>
      <div id="skills">
      <Skill/>
      </div>
      
      <div id='#calender'>
       <Calender/>
      </div>
      <div id="project">
      <Project/>
      </div>
      
      <div id="footer">
      <Footer/>
      </div>
      
    </div>
  )
}
export default Home;