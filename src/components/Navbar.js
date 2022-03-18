import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Future Store
      </Link>
      <ul
        className={isMobile ? "nav_links-mobile" : "nav_links"}
        onClick={() => setIsMobile(false)}
      >
        <li className="">
          <Link to="/" className="nav_links-items">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav_links-items">
            About
          </Link>
        </li>
        <li>
          <Link to="/proizvodi" className="nav_links-items">
            Products
          </Link>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
      <div className="btns" >
          <button type="btn" className="cart" >
            <FaShoppingCart />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
