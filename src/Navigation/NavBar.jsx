import React, {useContext, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './index.scss';
import {AppContext} from "../Context";
import {ReactComponent as Logo} from 'img/logo.svg'

const navLinks = [
	{path: '/cards', label: 'Cards'},
	{path: '/cubes', label: 'Cubes'},
	{path: '/spheres', label: 'Spheres'}
];

export const NavBar = () => {
	const {locationPath, updateLocation} = useContext(AppContext);
	const location = useLocation();
	const {pathname} = location;

	useEffect(() => {
		localStorage.setItem('location', pathname);
	}, [pathname]);

	return (
		<ul className="nav-bar-wrapper">
			<li className="nav-bar-element">
				<NavLink
					className={`link-logo ${pathname === '/skills-library' ? 'active-link-logo' : ''}`}
					to="/"
					onClick={() => updateLocation({target: {pathname: '/skills-library'}})}>
					<Logo/>
				</NavLink>
			</li>

			<span>{locationPath}</span>

			{navLinks.map((link, index) => (
				<li key={index} className="nav-bar-element">
					<NavLink
						onClick={updateLocation}
						to={link.path}
						className="nav-bar-link">
						{link.label}
					</NavLink>
				</li>
			))}
		</ul>
	);
};
