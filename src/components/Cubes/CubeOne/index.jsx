import React, {useState} from 'react';
import './index.scss';

export const CubeOne = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isReverse, setIsReverse] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
		setTimeout(() => {
			setIsReverse(true);
		}, 100);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setIsReverse(false);
	};

	return (
		<div
			className={`cube-wrapper ${isHovered ? 'hovered' : ''} ${isReverse ? 'reverse' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="side top"></div>
			<div className="side front"></div>
			<div className="side right"></div>
			<div className="side back"></div>
			<div className="side left"></div>
		</div>
	);
};
