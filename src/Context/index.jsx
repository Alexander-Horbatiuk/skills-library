import {createContext, useEffect, useState} from 'react';

export const AppContext = createContext(null);

export const ContextProvider = ({children}) => {
	const [user, setUser] = useState('')
	const [location, setLocation] = useState()

	useEffect(() => {
		const storedLocation = localStorage.getItem('location');
		setLocation(storedLocation || '');
	}, []);

	const updateLocation = (event) => {
		setLocation(event.target.pathname);
		localStorage.setItem('location', event.target.pathname);
	};



	const model = {
		User: user,
		setUser: setUser,
		Location: location,
		updateLocation: updateLocation,
	}

	return (
		<AppContext.Provider value={model}>
			{children}
		</AppContext.Provider>
	)
}