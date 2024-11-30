import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Project />
    </>
  );
}

export default Home;
