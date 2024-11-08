import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Navigater from "./components/Navigater/Navigater";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Hero />
        <Title title={"My Project"} />
        <Portfolio />
        <Title title={"About me"} />
        <About />
        <Title title={"My Services"} />
        <Services />
        <Title title={"Get in touch"} />
        <Contact />
        <Navigater />
        <Footer />
      </div>
    </>
  );
};

export default App;
