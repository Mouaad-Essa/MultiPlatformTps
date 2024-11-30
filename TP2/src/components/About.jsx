import React from "react";

function About(props) {
  const { name, about } = props.aboutData;
  return (
    <div>
      <h1 style={{ padding: "5px 0" }}>A Propos de moi</h1>
      <h2 style={{ padding: "5px", fontWeight: "bolder" }}>{name}</h2>
      <p>{about}</p>
    </div>
  );
}

export default About;
