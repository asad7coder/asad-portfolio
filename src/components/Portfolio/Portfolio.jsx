import React from "react";
import "./Portfolio.css";
import green_line from "../../assets/green-line.png";
import add_task from "../../assets/add-task.png";
import calculator from "../../assets/calculator.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <ul>
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
      </ul>
    </div>
  );
};

export default Portfolio;
