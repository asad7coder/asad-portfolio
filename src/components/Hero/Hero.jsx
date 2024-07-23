import React from "react";
import "./Hero.css";
import my_pic from "../../assets/hero-img.jpeg";
import next_icon from "../../assets/next-icon.png";

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
        <button className="hero-btn btn">
          Connect with me <img src={next_icon} alt="" className="next-icon" />
        </button>
      </div>
    </>
  );
};

export default Hero;
