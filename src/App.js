import './App.css';
import {Cards} from "components/Cards";
import {Cubes} from "components/Cubes";
import {Spheres} from "components/Spheres";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Cards/>
          <Cubes />
          <Spheres />
      </header>
    </div>
  );
}

export default App;
