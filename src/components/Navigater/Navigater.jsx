import React from "react";
import "./Navigater.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-scroll";
const Navigater = () => {
  return (
    <>
      <div className="navigater">
        <div className="navigater-box">
          <Link to="hero" duration={1000} smooth={true} offset={-200}>
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigater;
