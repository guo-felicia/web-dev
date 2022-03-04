import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index"
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList/index"
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList/index"
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Tuiter = () => {
    return (
        <>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowListItem/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryItem/>*/}
            {/*<PostSummaryList/>*/}
            {/*<ExploreComponent/>*/}
            <ExploreScreen/>
            
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: '/img/avatar/virging.svg',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}/>*/}
    
            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "/img/posts/2jq.jpeg",*/}
            {/*    "tweets": "122K"*/}
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
