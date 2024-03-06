import {SphereOne} from "components/Spheres/SphereOne";
import {SphereTwo} from "components/Spheres/SphereTwo";
import './index.scss';

export const Spheres = () => {
	return (
		<div className="content-box">
			<SphereOne />
			<SphereTwo />
		</div>
	)
}