import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="container">
                    <Route path="/hello" exact={true}>
                        <HelloWorld/>
                    </Route>
                    <Route path={["/", "/labs"]} exact={true}>
                        <Labs/>
                    </Route>
                    <Route path="/tuiter" exact={true}>
                        <Tuiter/>
                    </Route>
                
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

