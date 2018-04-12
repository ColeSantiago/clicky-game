import React from "react";
import "./GameArea.css";

const GameArea = props => (
  <div className="card">
    <div className="img-container">
      	<img className="batman" onClick={() => props.updateState(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default GameArea;