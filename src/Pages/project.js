import React from 'react'
import Project1 from '../Project1'
import Project2 from '../Project2'
import Project3 from '../Project3'
import './project.css'
 const Project = () => {
  return (
   <div className='mainProject'>
    <h1 >Projects</h1>
 <div  className='projectContainer'>
      
      <div className='project'>
        <div className='projectImg'>
           <img src={Project2} alt="firstProject"  />
        </div>
        <div className='projectDescription'>
          <h2>NiftyPM</h2>
          <p>Nifty is the remote collaboration hub to manage projects, tasks, and
            communications — all in one place. Remote work has never been
            easier, fun, and more</p>
          <h2>Tech Stack</h2>
          <p>HTML | CSS | Javascript</p>
          
         
        </div>
        <div className='btnContainer'>
          <a href="https://github.com/piyush-agrawal6/NiftyPM-clone"><button className='btn'>Github</button></a> 
         <a href="http://nifty-pm.netlify.app/"><button className='btn'>Netlify</button></a> 
          </div>
      </div>

      <div className='project'>
        <div className='projectImg'>
           <img src={Project1} alt="secondProject"  />
        </div>
        <div className='projectDescription'>
        <h2>Kindmeal.my</h2>
          <p>KindMeal attempts this by closely working with restaurants and
              cafes to offer attractive meat-free deals and cozy dining
              environments.</p>
          <h2>Tech Stack</h2>
          <p>React.js | Chakra ui | React Bootstrap</p>
        
       
        </div>
        <div className='btnContainer'>
          <a href="https://github.com/Varun-98-masai/RCT-101-kindmeal.my/tree/day-01"><button className='btn'>Github</button></a> 
          <a href="https://glittering-lamington-f3f69e.netlify.app/"><button className='btn'>Netlify</button></a> 
          </div>
      </div>
      <div className='project'>
        <div className='projectImg'>
           <img src={Project3} alt="thirdProject"  />
        </div>
        <div className='projectDescription'>
        <h2>Hindustan Times.com</h2>
          <p>Hindustan Times is an Indian English-language daily newspaper based in Delhi. It is the flagship publication of HT Media, an entity controlled by the KK Birla family, and is owned by Shobhana Bhartia. Hindustan Times. First Voice</p>
          <h2>Tech Stack</h2>
          <p>HTML | CSS | Javascript</p>
         
     
        </div>
        <div className='btnContainer'>
          <a href="https://github.com/Sahil9214/Utkarshfw20_1149-intersting-fork-8458"><button className='btn'>Github</button></a>  
          <a href="https://resilient-frangipane-30ed56.netlify.app"><button className='btn'>Netlify</button></a> 
          </div>
      </div>
     </div>
   </div>
    
   
  )
}
export default Project