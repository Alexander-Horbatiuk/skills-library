import React from 'react';
import './index.scss';

export const SphereTwo = () => {
	const sideCount = 6; // Количество сторон

	return (
		<div className="sphere-wrapper-two">
				{Array.from({ length: sideCount }).map((_, index) => (
					<div key={index + 1} className={`side side-${index + 1}`}
					></div>
				))}
		</div>
	);
};
