import React from "react";
import "./Portfolio.css";
import next_icon from "../../assets/next-icon.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* <ul>
        <li>
          <a href="https://asad7coder.github.io/Garding/" target="_blank">
            <img src={green_line} alt="" />
          </a>
        </li>
        <li>
          <a href="https://asad7coder.github.io/addTask/" target="_blank">
            <img src={add_task} alt="" />
          </a>
        </li>
        <li>
          <a href="https://asad7coder.github.io/Calculator/" target="_blank">
            <img src={calculator} alt="" />
          </a>
        </li>
      </ul> */}
      <div className="box-p">
        <h1>
          <a href="">Green Line Labore</a>
        </h1>
        <p>This Project are Gadner services offer and showing works</p>
        <a
          href="https://asad7coder.github.io/Garding/"
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
          subtraction, multiplication, and division.
        </p>
        <a
          href="https://asad7coder.github.io/Calculator/"
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
        <p>
          FA Techno Skills Welcome to FA Techno Skills, a comprehensive
          portfolio showcasing my expertise as a frontend developer. With over a
          decade of experience, I specialize in React, HTML, CSS, and
          JavaScript. This site highlights my technical skills, various
          projects, and tutorials designed to help others enhance their web
          development abilities.
        </p>
        <a
          href="https://asad7coder.github.io/fa-teachno-skills/"
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
