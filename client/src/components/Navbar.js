// Navbar.js

import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import CSS file for navbar styles

function Navbar() {
  const [isActive, setIsActive] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">Your Logo</a>
        <button className="toggle-button" onClick={toggleMenu}>&#9776;</button> {/* Add onClick event handler */}
        <div className={`nav-menu ${isActive ? 'active' : ''}`}> {/* Add active class based on state */}
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
