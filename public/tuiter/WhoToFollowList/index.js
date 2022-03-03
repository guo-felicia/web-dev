import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <div className="list-group-item wd-bold">Who to Follow</div>
            ${
                who.map(whoItem => {
                    return(WhoToFollowListItem(whoItem));
                }).join('')
            }
            </ul>
    `);
}

export default WhoToFollowList;