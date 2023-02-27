import React from 'react'
import './skill.css'
import bootstrap from '../skillsImages/bootstrap.png'
import css from '../skillsImages/css.png'
import expressjs from '../skillsImages/expressjs.png'
import git from '../skillsImages/git.png'
import html from '../skillsImages/html.png'
import javaScript from '../skillsImages/javaScript.png'
import materialui from '../skillsImages/materialui.png'
import mongoDB from '../skillsImages/mongoDB.png'
import nodejs from '../skillsImages/nodejs.png'
import npm from '../skillsImages/npm.png'
import Reactpng from '../skillsImages/Reactpng.png'
import Redux from '../skillsImages/Redux.png'

 const Skill = () => {
  return (
    <div id="skills" className='mainSkill'  class="nav-link skills">
       <h1>Skills</h1>
      <div  className='skillContainer'>
       <div class="skills-card" className='logo'>
       <img class="skills-card-img"src={html} alt="html.png" className='otherSkillImg'/>

  <h1 class="skills-card-name">HTML</h1>       
       </div>
       <div class="skills-card" className='logo'>
       <img class="skills-card-img" src={css} alt="css.png" className='otherSkillImg'/>
         <h1 class="skills-card-name">CSS</h1>       
       </div>
       
       <div class="skills-card"  className='logo'>
       <img class="skills-card-img" src={javaScript} alt="JS.png" className='otherSkillImg' />
         <h1 class="skills-card-name">JS</h1>
      
       </div>
      
        <div class="skills-card" className='logo'>
        <img class="skills-card-img" src={Reactpng} alt="react.png"className='otherSkillImg' />
          <h1 class="skills-card-name">React.js</h1>
        </div>

       <div class="skills-card" className='logo'>
       <img class="skills-card-img" src={Redux} alt="redux.png"className='otherSkillImg' />
         <h1 class="skills-card-name">Redux</h1>
       </div>

       <div class="skills-card" className='logo'>
       <img class="skills-card-img" src={nodejs} alt="nodeJS.png" className='nodeImg' />
       <h1 class="skills-card-name">Node.js</h1>
       </div>
        <div class="skills-card" className='logo'>
        <img class="skills-card-img" src={expressjs} alt="expressjs.png" className='nodeImg'/>
        <h1 class="skills-card-name">Express.js</h1>
        </div>
       
       <div class="skills-card" className='logo'>
       <img class="skills-card-img" src={mongoDB} alt="mongodb.png" className='otherSkillImg'/>
       <h1 class="skills-card-name">MongoDB</h1>       
       </div>
        
       <div class="skills-card" className='logo'>
       <img class="skills-card-img" src={materialui} alt="matrialui.png"className='otherSkillImg'/>
        <h1 class="skills-card-name">Material UI</h1>      
         </div>

       <div class="skills-card" className='logo'>
       <img  class="skills-card-img" src={git} alt="git.png" className='otherSkillImg'/>
        <h1 class="skills-card-name">GIT</h1>       
       </div>
        <div class="skills-card" className='logo'>
        <img  class="skills-card-img" src={bootstrap} alt="bootstrap.png" className='otherSkillImg' />
          <h1 class="skills-card-name">Bootstrap</h1>
        </div>
       
       <div class="skills-card" className='logo'>
       <img  class="skills-card-img" src={npm}alt="npm.png"className='otherSkillImg' />
         <h1 class="skills-card-name">NPM</h1>
       </div>
       
       
    </div>
    </div>
  )
}
export default Skill