import React from "react";
import "./Portfolio.css";
import next_icon from "../../assets/next-icon.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="box-p">
        <h1>
          <a href="">Green Line Labore</a>
        </h1>
        <p>This Project are Gadner services offer and showing works</p>
        <a
          href="https://asad7coder.github.io/greenlinelaborer/"
          target="_blank"
          className="visited"
        >
          Visit Site <img src={next_icon} alt="" />
        </a>
      </div>
      <div className="box-p">
        <h1>
          <a href="">FA Teachno Skills</a>
        </h1>
        <p>FA Techno Skills Welcome to FA Techno Skills, a comprehensive....</p>
        <a
          href="https://asad7coder.github.io/fa-teachno-skills/"
          target="_blank"
          className="visited"
        >
          Visit Site <img src={next_icon} alt="" />
        </a>
      </div>
      <div className="box-p">
        <h1>
          <a href="">Add Task</a>
        </h1>
        <p>This Project are Todo-List/Add task Daily</p>
        <a
          href="https://asad7coder.github.io/addTask/"
          target="_blank"
          className="visited"
        >
          Visit Site <img src={next_icon} alt="" />
        </a>
      </div>
      <div className="box-p">
        <h1>
          <a href="">Calculator</a>
        </h1>
        <p>
          It supports fundamental arithmetic operations such as addition,
          subtraction, multiplication ....
        </p>
        <a
          href="https://asad7coder.github.io/Calculator/"
          target="_blank"
          className="visited"
        >
          Visit Site <img src={next_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
