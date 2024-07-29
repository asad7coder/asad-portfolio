import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.jpg";
import verified_tick from "../../assets/verified-tick.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // Toggle Menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} duration={500}>
        <div className="logo">
          <img src={logo} alt="" className="logo_img" />
          <span>Muhammad Asad</span>
          <img src={verified_tick} alt="" className="verified-tick" />
        </div>
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="portfolio" smooth={true} offset={-150} duration={500}>
            Projects
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-160} duration={500}>
            About me
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="services" smooth={true} offset={-150} duration={500}>
            Services
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} offset={-200} duration={500}>
            Contact us
          </Link>{" "}
        </li>
        <li>
          <a
            href="https://github.com/asad7coder/"
            target="_blank"
            className="a-tag-h"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1z5XIAcsbYt2VcQ1xFBb2GTpx8-Lxyumk/view?usp=sharing"
            target="_blank"
            className="a-tag-h"
          >
            My Cv
          </a>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
