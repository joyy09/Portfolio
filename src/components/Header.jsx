/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../styling/Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <img className='logo' src="logo.png" alt="Logo" />
      <div className={`nav-buttons ${isOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        <ul>
          <li> <ScrollLink to="about" smooth={true} duration={500} offset={-50} >About</ScrollLink> </li>
          <li> <ScrollLink to="workex" smooth={true} duration={500} offset={-50}>Experience and Education</ScrollLink></li>
          <li><ScrollLink to="project" smooth={true} duration={500} offset={-50}>Projects</ScrollLink></li>
          <li> <ScrollLink to="skill" smooth={true} duration={500} offset={-50}>Skills</ScrollLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
