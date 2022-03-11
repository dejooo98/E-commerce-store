import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Future Store</h3>
      <ul
        className={isMobile ? "nav_links-mobile" : "nav_links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
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
          <Link to="/products" className="nav_links-items">
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
      <button className="cart">
        <FaShoppingCart />
      </button>
    </nav>
  );
};

export default Navbar;
