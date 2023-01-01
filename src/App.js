import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./Pages/home";
import { About } from "./Pages/about";
import { Contact } from "./Pages/contact";
import { Project } from "./Pages/project";
import { Skill } from "./Pages/skill";
import { Resume } from "./Pages/resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projct" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;