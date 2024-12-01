import React from "react";
import { useState } from "react";

function Experience(props) {
  const exps = props.exps;

  const [input, setInput] = useState();
  const [exp, setExperices] = useState(exps);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddExp = () => {
    if (input) {
      setExperices([...exp, input]);
      setInput("");
    }
    setToggle((prev) => !prev);
  };
  return (
    <div>
      <h1>Expérience professionnelle</h1>
      <ul className="list">
        {exp.map((exp, index) => {
          return <li key={index}>{exp}</li>;
        })}
      </ul>
      <div>
        {toggle && (
          <input
            type="text"
            name="exp"
            id="exp"
            placeholder="Expérience"
            onChange={handleChange}
          />
        )}
        <button onClick={handleAddExp}>
          {toggle ? "Ajouter" : "Afficher la zonne de texte"}
        </button>
      </div>
    </div>
  );
}

export default Experience;
