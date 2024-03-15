import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Cards} from '../components/Cards';
import {Cubes} from '../components/Cubes';
import {Spheres} from '../components/Spheres';
import {Main} from '../components/Main';
import {NavBar} from './NavBar';


export const AppNav = () => {
	return (
		<Router basename="/skills-library">
			<NavBar/>
			<div className="content-wrapper">
				<Routes>
					<Route path="/" element={<Main/>}/>
					<Route path="/cards" element={<Cards/>}/>
					<Route path="/cubes" element={<Cubes/>}/>
					<Route path="/spheres" element={<Spheres/>}/>
				</Routes>
			</div>

		</Router>
	);
};

