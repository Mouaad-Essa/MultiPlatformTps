import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Skills from "../components/Skills";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const aboutData = {
    name: "Mouaad Es-safryouy",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium delectus magnam eveniet debitis, voluptates dignissimos cupiditate quis veniam, est maxime consectetur eligendi! Nulla praesentium, iusto accusantium quaerat in reprehenderit nisi.",
  };
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  const exps = ["Exp 1", "Exp 2", "Exp 3", "Exp 4"];
  const projectsData = [
    {
      id: 1,
      title: "Projet 1",
      description: "this is my project1 description",
    },
    {
      id: 2,
      title: "Projet 2",
      description: "this is my project2 description",
    },
  ];
  return (
    <>
      <NavBar />
      <main>
        <About aboutData={aboutData} />
        <Skills skills={skills} />
        <Experience exps={exps} />
        <Project projectData={projectsData} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
