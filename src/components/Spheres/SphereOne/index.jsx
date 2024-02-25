import React, {useEffect, useState} from 'react';
import './index.scss';

export const SphereOne = () => {
	const sideCount = 19; // Количество сторон
	const [currentSideIndex, setCurrentSideIndex] = useState(0);
	const [isAddingClasses, setIsAddingClasses] = useState(true);
	const animationSpeed = 200; // Скорость анимации (количество кадров в секунду)
	const framesPerSide = Math.ceil(animationSpeed / sideCount); // Количество кадров на каждую сторону

	useEffect(() => {
		let frameCount = 0;
		let animationFrameId;

		const animate = () => {
			if (frameCount === framesPerSide) {
				frameCount = 0;

				if (isAddingClasses) {
					if (currentSideIndex < sideCount) {
						setCurrentSideIndex((prevIndex) => prevIndex + 1);
					} else {
						setIsAddingClasses(false);
					}
				} else {
					if (currentSideIndex > 0) {
						setCurrentSideIndex((prevIndex) => prevIndex - 1);
					} else {
						setIsAddingClasses(true);
					}
				}
			}

			frameCount++;
			animationFrameId = requestAnimationFrame(animate);
		};

		// Запуск анимации
		animationFrameId = requestAnimationFrame(animate);

		// Отмена анимации при размонтировании компонента
		return () => cancelAnimationFrame(animationFrameId);
	}, [currentSideIndex, sideCount, isAddingClasses, framesPerSide]);


	return (
		<div className="sphere-wrapper-one">
			<div className="sphere">
				<span>3D Effect</span>
				{Array.from({ length: sideCount }).map((_, index) => (
					<div
						key={index + 1}
						className={`side side-${index + 1} ${
							index < currentSideIndex ? 'newClass' : ''
						}`}
					></div>
				))}
			</div>
		</div>
	);
};
