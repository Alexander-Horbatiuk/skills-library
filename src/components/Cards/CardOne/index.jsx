import "./index.scss"

export const CardOne = () => {
	return (
		<div className="card">
			<div className="card-content">
				<div className="card-front">
					<p className="sub-title">sub-title</p>
					<h1 className="title">title</h1>
					<p className="sub-title">sub-title</p>
				</div>
				<div className="card-back">
					<div className="back-title">sub-title</div>
					<div className="movie-description">
						<span>Synopsis: </span> Lorem ipsum
					</div>
					<div className="gerne">
						<span>Gerne</span> Lorem...
					</div>
					<div className="release-date">
						<span>Release</span> Lorem...
					</div>
				</div>

			</div>
		</div>
	)
}