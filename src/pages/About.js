import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="breadcrumb-hero">
        <h3>
          {" "}
          <Link to="/">Home</Link> /<Link to="/about">About</Link>{" "}
        </h3>
      </div>
      <section className="section section-center">
        <div className="title">
          <h2>our history</h2>
        </div>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
