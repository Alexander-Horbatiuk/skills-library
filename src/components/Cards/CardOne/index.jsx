import "./index.scss"

export const CardOne = () => {
	return (
		<div className="card-one-wrapper">
			<div className="card-content">
				<div className="card-front">
					<p className="sub-title">Droid</p>
					<h1 className="title">С-3PO</h1>
					<p className="sub-title">gold</p>
				</div>
				<div className="card-back">
					<div className="sub-title">Droid</div>
					<div className="title">R2-D2</div>
					<div className="movie-description">
						<span>R2-D2: </span> An R2 series astromech droid modified by Naboo engineers and Anakin Skywalker. Along
						with his partner C-3PO, he participated in many significant events in galactic history from the last days of
						the Old Republic to the times of the First Order.
					</div>
				</div>
			</div>
		</div>
	)
}