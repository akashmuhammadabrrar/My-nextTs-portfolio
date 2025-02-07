import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Hero></Hero>
      </div>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
