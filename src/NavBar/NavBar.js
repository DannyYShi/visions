import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          VISIONS
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
