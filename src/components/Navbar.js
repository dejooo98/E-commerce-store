import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <Link to='/'>
        Home
      </Link>
    </div>
  );
};

export default Navbar;
