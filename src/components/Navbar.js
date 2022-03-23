import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

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

      <Link to="/cart">
        <div className="btns">
          <button type="btn" className="cart">
            <FaShoppingCart />
            <CartLink />
          </button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
