import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem"


const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item wd-bold">Who to Follow</li>
            {
                who.map(whoItem => {
                    return (
                        <WhoToFollowListItem who={whoItem}/>
                    );
                })
            }
        
        </ul>
    );
}

export default WhoToFollowList;