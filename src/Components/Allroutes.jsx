import React from 'react'
import {Route,Routes} from "react-router-dom";
import { About } from '../Pages/about';
import { Contact } from '../Pages/contact';
import { Home } from '../Pages/home';
import { Project } from '../Pages/project';
import { Skill } from '../Pages/skill';
export const Allroutes = () => {
  return (
     
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/skill' element={<Skill />}  />
            <Route path='/project' element={<Project />}  />
        </Routes>
      
  )
}
