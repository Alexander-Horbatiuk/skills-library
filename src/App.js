import './App.css';
import {Cards} from "./components/Cards";
import {Cubes} from "./components/Cubes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Cards/>
          <Cubes />
      </header>
    </div>
  );
}

export default App;
