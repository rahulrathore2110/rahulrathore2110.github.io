import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === '#home' ? "active" : ""}
      >
        
        Home
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === '#about' ? "active" : ""}
      >
        
        About
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === '#skills' ? "active" : ""}
      >
        
        Skills
      </a>
    
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? "active" : ""}
      >

        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === '#contact' ? "active" : ""}
      >
      
        Contact
      </a>
    </nav>
  );
};

export default Nav;
