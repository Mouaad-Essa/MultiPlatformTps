import React from "react";

const Content = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

function Card(props) {
  const { title, source, description } = props;
  return (
    <div className="card">
      <Content>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : <img src={source} alt={title} />}
      </Content>
    </div>
  );
}

export default Card;
