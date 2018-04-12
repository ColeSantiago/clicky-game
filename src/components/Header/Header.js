import React from "react";
import "./Header.css";
import gotham from "./img-header/gotham.jpg"

const Header = props => (
	<header>
		<img className="header-img" src={gotham} alt="gotham"/>
		<div className="photo-child">
			<h1>Clicky Game!</h1>
			<h2 className="directions">Click on an image to earn points, but don't click on any more than once!</h2>
		</div>
	</header>
);

export default Header;