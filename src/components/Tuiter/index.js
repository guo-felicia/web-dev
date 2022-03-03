import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index"
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList/index"

const Tuiter = () => {
    return (
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <WhoToFollowList/>
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '../Tuiter/img/avatar/virging.svg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}/>*/}
        </>
    )
};
export default Tuiter;


// Practice of Labs
// const Tuiter = () => {
//     return(
//         <>
//             <h1>Tuiter</h1>
//             <NavigationSidebar/>
//             <Link to="/hello">
//                 Hello
//             </Link> |
//             <Link to="/labs">
//                 Labs
//             </Link>
//         </>
//     )
// };
// export default Tuiter;
