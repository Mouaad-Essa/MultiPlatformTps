import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h1>Mon Portfolio</h1>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </div>
    </div>
  );
}

export default Navbar;
