import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
// import "../explore.css"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <div class="list-group-item wd-bold">Who to Follow</div>
            ${
        who.map(whoItem => {
            return (WhoToFollowListItem(whoItem));
        }).join('')
    }
            </ul>
    `);
}

export default WhoToFollowList;