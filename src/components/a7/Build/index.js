import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "../../Tuiter/ExploreScreen/ExploreScreen";

const Build = () => {
    let HomeScreen;
    return(
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>
        </div>
    );
};
export default Build;
