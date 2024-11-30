import React, { useState } from "react";

function Project(props) {
  const projectData = props.projectData;

  const [input, setInput] = useState({});
  const [projects, setProjects] = useState(projectData);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleAddProjects = () => {
    if (input.title && input.description) {
      setProjects((prevProjects) => [...prevProjects, input]);
      setInput({});
    }
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1>Projets</h1>
      <div className="project-container">
        {projects.map((item, index) => {
          return (
            <div className="project" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      {toggle && (
        <>
          <input type="text" name="title" id="title" onChange={handleChange} />
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
          />
        </>
      )}
      <button onClick={handleAddProjects}>
        {toggle ? "Ajouter" : "Afficher les zonnes de texte"}
      </button>
    </div>
  );
}

export default Project;
