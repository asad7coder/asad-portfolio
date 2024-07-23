import React from "react";
import "./About.css";
import about_img from "../../assets/about-img.jpeg";
const About = () => {
  return (
    <>
      <div className="about ">
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
              <p> React</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p> WordPress</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
        <div className="total">{/* coming soon */}</div>
      </div>
    </>
  );
};

export default About;
