import React from "react";
import "./Nav.css";

const Nav = props => (
	<div className="Nav">
		<h1>Clicky Game</h1>

		{props.navMessage}

		Current Score: {props.currentScore} | Top Score: {props.topScore}
	</div>
);

export default Nav;