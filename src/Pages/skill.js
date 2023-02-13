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
      <div className='skillContainer'>
       <div className='logo'>
       <img src={html} alt="html.png" className='otherSkillImg'/>
       </div>
       <div  className='logo'>
       <img src={css} alt="css.png" className='otherSkillImg'/>
       </div>
       
       <div  className='logo'>
       <img src={javaScript} alt="JS.png" className='otherSkillImg' />
       </div>
      
        <div  className='logo'>
        <img src={Reactpng} alt="react.png"className='otherSkillImg' />
        </div>

       <div className='logo'>
       <img src={Redux} alt="redux.png"className='otherSkillImg' />
       </div>

       <div className='logo'>
       <img src={nodejs} alt="nodeJS.png" className='nodeImg' />
       </div>
        <div className='logo'>
        <img src={expressjs} alt="expressjs.png" className='nodeImg'/>
        </div>
       
       <div className='logo'>
       <img src={mongoDB} alt="mongodb.png" className='otherSkillImg'/>
       </div>
        
       <div className='logo'>
       <img src={materialui} alt="matrialui.png"className='otherSkillImg'/>
       </div>

       <div className='logo'>
       <img src={git} alt="git.png" className='otherSkillImg'/>
       </div>
        <div className='logo'>
        <img src={bootstrap} alt="bootstrap.png" className='otherSkillImg' />
        </div>
       
       <div className='logo'>
       <img src={npm}alt="npm.png"className='otherSkillImg' />
       </div>
       
       
    </div>
    </div>
  )
}
export default Skill