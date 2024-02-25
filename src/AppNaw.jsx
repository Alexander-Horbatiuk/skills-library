import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Cards} from './components/Cards';
import {Cubes} from './components/Cubes';
import {Spheres} from './components/Spheres';
import {NawBar} from './NawBar';

export const AppNaw = () => {
	return (
		<>
			<NawBar />
			<Routes>
				<Route path="/skills-library/cards" element={<Cards />} />
				<Route path="/skills-library/cubes" element={<Cubes />} />
				<Route path="/skills-library/spheres" element={<Spheres />} />
			</Routes>
		</>
	);
};

