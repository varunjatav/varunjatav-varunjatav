import React from "react";


import "./App.css";
// import { Allroutes } from "./Components/Allroutes";
import NavbarPort from "./Components/Navbar";
import { About } from "./Pages/about";
import { Contact } from "./Pages/contact";
import { Home } from "./Pages/home";
import { Project } from "./Pages/project";
import { Skill } from "./Pages/skill";

function App() {
  return (
    <div className="App">
      <NavbarPort/>
     
      <div id="contact">
      <Home />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="contact">
      <Contact />
      </div>
      <div id="project">
      <Project />
      </div>
      <div id="skill">
      <Skill />
      </div>
      {/* <Allroutes/> */}
    </div>
  );
}

export default App;
