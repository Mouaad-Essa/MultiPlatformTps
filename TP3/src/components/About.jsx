import React from "react";

function About(props) {
  const { name, about } = props.aboutData;
  return (
    <div className="about">
      <h2>A Propos de moi</h2>
      <div className="info">
        <p className="name">{name}</p>
        <p className="more">{about}</p>
      </div>
    </div>
  );
}

export default About;
