import React from "react";
import "./Hero.css";
import my_pic from "../../assets/hero-img.jpeg";
import next_icon from "../../assets/next-icon.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="hero ">
        <img src={my_pic} alt="" className="my_pic" />
        <h1 className="multi-h1">Muhammad Asad,</h1>
        <h1>Front-End Developer base in Pakistan</h1>
        <p>
          I am Muhammad Asad, a front-end developer based in Pakistan with over
          1 year of freelance experience. I specialize in HTML, CSS, JavaScript,
          and React, and have expertise in WordPress for creating and managing
          dynamic websites.
        </p>
        <Link to="contact" smooth={true} duration={500} offset={-200}>
          <button className="hero-btn btn">
            Connect with me <img src={next_icon} alt="" className="next-icon" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
