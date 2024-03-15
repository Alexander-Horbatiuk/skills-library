import {createContext, useEffect, useState} from 'react';

export const AppContext = createContext(null);

export const ContextProvider = ({children}) => {
	const [user, setUser] = useState('')
	const [locationPath, setLocation] = useState('/skills-library')

	useEffect(() => {
		const storedLocation = localStorage.getItem('location');
		setLocation(storedLocation || 'skills-library');
	}, []);

	const updateLocation = ({target}) => {
		const {pathname} = target;
		setLocation(pathname);
		localStorage.setItem('location', pathname);
	};

	const model = {
		user,
		setUser,
		locationPath,
		updateLocation,
	}

	return (
		<AppContext.Provider value={model}>
			{children}
		</AppContext.Provider>
	)
}