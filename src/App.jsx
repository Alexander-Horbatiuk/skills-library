import './styles/App.scss';
import {AppNav} from './Navigation/AppNav';
import {ContextProvider} from "./Context";

const App = ({model}) => {
    return (
        <div className="main-section">
            <ContextProvider>
                <AppNav/>
            </ContextProvider>
        </div>
    );
}

export default App;
