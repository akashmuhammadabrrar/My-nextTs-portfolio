"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1500,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

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
