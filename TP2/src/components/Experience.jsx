import React from "react";

function Experience(props) {
  const exps = props.exps;
  return (
    <div>
      <h1 style={{ padding: "5px 0" }}>Expérience professionnelle</h1>
      <ul>
        {exps.map((exp, index) => {
          return <li key={index}>{exp}</li>;
        })}
      </ul>
    </div>
  );
}

export default Experience;
