import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './styles/AppNav.scss';

export const NawBar = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<ul className="naw-bar-wrapper">
			<span>{pathname}</span>

			<li className={"nav-bar-element " + (pathname === '/skills-library/cards' ? 'true' : 'false')}>
				<NavLink exact
						 to="/skills-library/cards"
						 className="naw-bar-link"
				>
					Cards
				</NavLink>
			</li>
			<li className="naw-bar-element">
				<NavLink exact
						 to="/skills-library/cubes"
						 className="naw-bar-link"
				>
					Cubes
				</NavLink>
			</li>
			<li className="naw-bar-element">
				<NavLink exact
						 to="/skills-library/spheres"
						 className="naw-bar-link"
				>
					Spheres
				</NavLink>
			</li>
		</ul>
	);
};
