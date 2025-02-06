import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
};

export default Home;
