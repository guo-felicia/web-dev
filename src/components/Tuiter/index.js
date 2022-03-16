import React from "react";

import {Route} from "react-router-dom";
// import HomeScreen from "./home-screen";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import whoReducer from "../../reducers/whoReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList/index";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index";

const store = createStore(whoReducer);
const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};
export default Tuiter;
