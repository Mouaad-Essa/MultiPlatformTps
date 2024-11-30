import React from "react";

function Project(props) {
  const projectData = props.projectData;
  return (
    <div>
      <h1 style={{ padding: "5px 0" }}>Projets</h1>
      <div>
        {projectData.map((item) => {
          return (
            <div key={item.id}>
              <h3 style={{ padding: "5px 0" }}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
