import React from "react";
import "./GameArea.css";

const GameArea = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.updateState(props.clicked)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GameArea;