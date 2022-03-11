import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="breadcrumb-hero">
      <h3>
        {" "}
        <Link to="/">Home</Link> /<Link>About</Link>{" "}
      </h3>
    </div>
  );
};

export default About;
