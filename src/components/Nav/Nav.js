import React from "react";
import "./Nav.css";

const Nav = props => (
	<nav className="Nav">
		<ul>
			<li><h1 className="nav-title">Clicky Game</h1></li>

			<li><h2 className="nav-message">{props.navMessage}</h2></li>

			<li><h2 className="scores">Current Score: {props.currentScore} | Top Score: {props.topScore}</h2></li>
		</ul>
	</nav>
);

export default Nav;