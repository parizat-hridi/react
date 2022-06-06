import React from 'react';
import './navbar.css';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <nav style={{ backgroundColor: darkMode && '#333' }}>
        <div className="navbar">
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* <div className="cancel-btn">
              <i className="fas fa-times"></i>
            </div> */}
          </ul>
        </div>
        {/* <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
