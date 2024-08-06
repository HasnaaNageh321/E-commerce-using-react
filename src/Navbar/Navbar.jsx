import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbarstyle.css';

function Navbar() {
  
  
  return (
    <header>
      <div className="navconst">
        <div className="contentHeader">
          <div className="logo">
            <Link to="/"> {/* Use Link component for internal navigation */}
              e-commerce
            </Link>
            <i className="fas fa-shopping-cart"></i> {/* Corrected class to className */}
          </div>
          <nav>
            <ul >
              <li><Link to="/">Home</Link></li> {/* Use Link for internal navigation */}
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
