import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Cards} from '../components/Cards';
import {Cubes} from '../components/Cubes';
import {Spheres} from '../components/Spheres';
import {Main} from '../components/Main';
import {NavBar} from './NavBar';


export const AppNav = () => {
	return (
		<Router>
			<NavBar />
			<div className="content-wrapper">
				<Routes>
					<Route path="/skills-library" element={<Main />} />
					<Route path="/skills-library/cards" element={<Cards />} />
					<Route path="/skills-library/cubes" element={<Cubes />} />
					<Route path="/skills-library/spheres" element={<Spheres />} />
				</Routes>
			</div>

		</Router>
	);
};

