import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbarstyle.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="navconst">
        <div className="contentHeader">
          <div className="logo">
            <p>e-commerce</p>
            <i className="fas fa-shopping-cart"></i>
          </div>
          <nav>
            <ul className={menuOpen ? 'show' : ''}>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
              <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
