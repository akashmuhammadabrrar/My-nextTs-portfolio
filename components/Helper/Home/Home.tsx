import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
};

export default Home;
