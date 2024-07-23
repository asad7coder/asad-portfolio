import React from "react";
import "./Services.css";
import next_icon from "../../assets/next-icon.png";
const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <h2>01</h2>
        <h1>Web design</h1>
        <p>
          Web design Web development is the process of building, programming...
        </p>
        <button className="btn service-btn">
          Learn More <img src={next_icon} alt="" />
        </button>
      </div>
      <div className="service">
        <h2>01</h2>
        <h1>Web design</h1>
        <p>
          Web design Web development is the process of building, programming...
        </p>
        <button className="btn service-btn">
          Learn More <img src={next_icon} alt="" />
        </button>
      </div>
      <div className="service">
        <h2>01</h2>
        <h1>Web design</h1>
        <p>
          Web design Web development is the process of building, programming...
        </p>
        <button className="btn service-btn">
          Learn More <img src={next_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Services;
