import React, { useState } from "react";

function Skills(props) {
  const skills = props.skills;

  const [input, setInput] = useState();
  const [skillsList, setSkillsList] = useState(skills);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddSkills = () => {
    if (input) {
      setSkillsList([...skillsList, input]);
      setInput("");
    }
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1>Compétences</h1>
      <ul className="list">
        {skillsList.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      <div>
        {toggle && (
          <input type="text" name="exp" id="exp" onChange={handleChange} />
        )}
        <button onClick={handleAddSkills}>
          {toggle ? "Ajouter" : "Afficher la zonne de texte"}
        </button>
      </div>
    </div>
  );
}

export default Skills;
