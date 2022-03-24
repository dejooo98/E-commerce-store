import React from "react";
import "../index.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© 2022 Future Store | All rights reserved</p>
      <p>
        Developed by |{" "}
        <Link exact to="" target="blank">
          {" "}
          Dejan
        </Link>{" "}
        &{" "}
        <Link to="" target="blank">
          Darko
        </Link>
      </p>
      <div className="socials">
        <FaFacebook /> <FaInstagram />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
