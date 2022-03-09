import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem"
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector((state) => state);
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