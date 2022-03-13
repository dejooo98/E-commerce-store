import React from "react";
import "../index.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>© 2022 Future Store | All rights reserved</p>
      <p>
        Developed by |{" "}
        <a href="#" target="blank">
          {" "}
          Dejan
        </a>{" "}
        &{" "}
        <a href="#" target="blank">
          Darko
        </a>
      </p>
      <div className="socials">
        <FaFacebook /> <FaInstagram />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
