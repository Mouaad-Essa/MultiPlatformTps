import React from "react";

function Skills(props) {
  const skills = props.skills;

  return (
    <div>
      <h1 style={{ padding: "5px 0" }}>Compétences</h1>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;
