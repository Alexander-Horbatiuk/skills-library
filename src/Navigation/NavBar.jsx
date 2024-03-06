import React, {useContext, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './index.scss';
import {AppContext} from "../Context";
import {ReactComponent as Logo} from 'img/logo.svg'

export const NavBar = () => {
	const {Location, updateLocation} = useContext(AppContext);
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		localStorage.setItem('location', pathname);
	}, [pathname]);

	return (
		<ul className="naw-bar-wrapper">
			<li className="nav-bar-element">
				<NavLink
					className={`link-logo ${pathname === '/skills-library' ? 'active-link-logo' : ''}`}
					to="/skills-library"
					onClick={() => updateLocation({ target: { pathname: '/skills-library' } })}>
					<Logo />
				</NavLink>
			</li>

			<span>{Location}</span>

			<li className="nav-bar-element">
				<NavLink
					onClick={updateLocation}
					to="/skills-library/cards"
					className="naw-bar-link">
					Cards
				</NavLink>
			</li>
			<li className="naw-bar-element">
				<NavLink
					onClick={updateLocation}
					to="/skills-library/cubes"
					className="naw-bar-link">
					Cubes
				</NavLink>
			</li>
			<li className="naw-bar-element">
				<NavLink
					onClick={updateLocation}
					to="/skills-library/spheres"
					className="naw-bar-link">
					Spheres
				</NavLink>
			</li>
		</ul>
	);
};