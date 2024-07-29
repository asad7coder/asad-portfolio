import React from "react";
import "./About.css";
import about_img from "../../assets/about-img.jpeg";
import html_logo from "../../assets/html-logo.png";
import css_logo from "../../assets/css-logo.png";
import js_logo from "../../assets/js-logo.png";
import bt_logo from "../../assets/bt-logo.png";
import react_logo from "../../assets/react-logo.png";
import wp_logo from "../../assets/wp-logo.png";
import el_logo from "../../assets/el-logo.png";
const About = () => {
  return (
    <>
      <div className="about ">
        <div className="about-row1">
          <div className="about-left">
            <img src={about_img} alt="" />
          </div>
          <div className="about-right">
            <p className="about-p">
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p className="about-p">
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to ea ch project.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p> HTML & CSS</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p> JavaScript</p> <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill">
                <p> Bootstrap</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p> React</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p> WordPress</p> <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-row2">
          <h2>My Skills</h2>
          <div className="box-about">
            <img src={html_logo} alt="" />
            <img src={css_logo} alt="" />
            <img src={js_logo} alt="" />
            <img src={bt_logo} alt="" />
            <img src={react_logo} alt="" />
            <img src={wp_logo} alt="" />
            <img src={el_logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
