import React from 'react';
import './index.scss';

export const CubeTwo = () => {
	const sideCount = 19; // Количество сторон
	const sides = Array(sideCount).fill().map((_, index) => index + 1);

	return (
		<div className="earth-wrapper">
			<div className="earth">
				<span>3D Effect</span>
				{sides.map((side) => (
					<div key={side} className={`side side-${side}`}></div>
				))}
			</div>
		</div>
	);
};
