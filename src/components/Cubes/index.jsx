import {CubeOne} from "components/Cubes/CubeOne"
import {CubeTwo} from "./CubeTwo";

export const Cubes = () => {
	return (
		<>
			<CubeOne />
			<CubeTwo sideCount={20} />
		</>
	)
}