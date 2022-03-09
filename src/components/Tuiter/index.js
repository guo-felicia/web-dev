import React from "react";

import {Route} from "react-router-dom";
import HomeScreen from "./home-screen";
import ExploreScreen from "./ExploreScreen";
import who from "../../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(who);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path="/tuiter"
                       exact={true} element={<HomeScreen/>}/>
                <Route path="/tuiter/explore"
                       exact={true} element={<ExploreScreen/>}/>
            </div>
        </Provider>
    );
};
export default Tuiter;
