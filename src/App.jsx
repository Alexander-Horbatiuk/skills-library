import './styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppNaw} from './AppNaw';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <AppNaw />
                </header>
            </div>
        </Router>
    );
}

export default App;
